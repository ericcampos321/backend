const { permissionRepository } = require("../repository/PermissionRepository");

// Create a new permission
const createPermission = async (req, res) => {

  try {
    const permissionData = req.body;

    const newPermission = await permissionRepository.createPermission(permissionData);
    res.status(201).json(newPermission);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

module.exports = {
  createPermission,
}