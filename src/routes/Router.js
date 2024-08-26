const express = require("express");
const router = express.Router(); // Usando express.Router()


router.use("/api/users", require("./UserRoutes"));

// Rota de teste
router.get("/", (req, res) => {
    res.send("API Working!");
});

module.exports = router; 