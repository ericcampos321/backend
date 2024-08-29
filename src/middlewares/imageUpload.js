const multer = require("multer");
const path = require("path");

//Destination to store
const imageStorage = multer.diskStorage({
  /**
   * Define o destino para upload de imagens.
   * A pasta de destino   dinamica, de acordo com a rota que o usuario est  acessando.
   * Se a rota incluir "users", a pasta de destino ser  "uploads/users".
   * Se a rota incluir "photos", a pasta de destino ser  "uploads/photos".
   * @param {Object} req - Requisi o atual.
   * @param {Object} file - Arquivo que est  sendo enviado.
   * @param {Function} cb - Fun o de callback.
   */
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("users")) {
      folder = "users"
    } else if (req.baseUrl.includes("photos")) {
      folder = "photos"
    }
    cb(null, `uploads/${folder}/`)
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const imageUpload = multer({
  storage: imageStorage,
  fileFilter(req, file, cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {

      //upload only png and jpg formts
      return cb(new Error("Por favor, Envie apenas imagens com as extensões (jpg, jpeg, png, gif)"))
    }
    cb(undefined, true)
  }
})

module.exports = {
  imageUpload
}