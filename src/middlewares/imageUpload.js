const multer = require("multer");
const path = require("path");

//Destination to store
const imageStorage = multer.diskStorage({
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
  imageUpload,
}