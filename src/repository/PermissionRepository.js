const { Permission } = require("../models");

// Create a new permission
const createPermission = async (permissionData) => {

  try {
    const newPermission = await Permission.create(permissionData);
    return newPermission;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  createPermission,
}