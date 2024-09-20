const express = require("express");
const router = express.Router();

//Controller
const { permissionController } = require("../controllers/PermissionController");

// Routes
router.post("/", permissionController.createPermission);

module.exports = router;