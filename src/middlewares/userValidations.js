const { body } = require("express-validator");

const userCreateValitation = () => {
  return [
    body("name")
      .isString()
      .withMessage("O nome é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no minimo 3 caracteres."),
    body("email")
      .isString()
      .withMessage("O email é obrigatório")
      .isEmail()
      .withMessage("Insira um email valido."),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no minimo 5 caracteres!"),
    body("confirmpassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória")
      .custom((value, { req }) => {
        if (value != req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
  ];
};

const loginValidation = () => {
  return [
    body("email")
      .isString()
      .withMessage("O email é obrigatório")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
    body("password").isString().withMessage("A senha é Obrigatória"),
  ];
};

  /*Valida o corpo da requisição de um serviço para atualizar um usuário
  O nome e a senha são opcionais, mas se forem informados,
  precisam ter no m nimo 3 caracteres e 5 caracteres, respectivamente.*/
const userUpdateValidation = () => {
  return [
    body("name")
      .optional()
      .isLength({ min: 3 })
      .withMessage("O nome precisa ter no minimo 3 caracteres."),
    body("password")
      .optional()
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no minimo 5 caracteres!"),
  ];
};

module.exports = {
  userCreateValitation,
  loginValidation,
  userUpdateValidation,
};
