const express = require("express");
const router = express.Router(); // Usando express.Router()

// Rota de teste
router.get("/", (req, res) => {
    res.send("API Working!");
});

module.exports = router;