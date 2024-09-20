const { PermissionRepository } = require("../repository");

// Create a new permission
const permissionService = {

  createPermission(permissionData) {
    return PermissionRepository.createPermission(permissionData);
  }
};

module.exports = {
  permissionService,
}