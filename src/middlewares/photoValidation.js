const { body } = require("express-validator");

const photoInsertValidation = () => {
  return [
    body("title")
      .not()
      .equals("underfined")
      .withMessage("O campo titulo é obrigatório!")
      .isString()
      .withMessage("O campo titulo é obrigatório!")
      .isLength({ min: 3 })
      .withMessage("O campos titulo deve ter no minimo 3 caracteres!"),
    body("image").custom((value, { req }) => {
      if (!req.file) {
        throw new Error("O campo imagem é obrigatório!");
      }
      return true;
    })
  ];
};

module.exports = {
  photoInsertValidation,
};