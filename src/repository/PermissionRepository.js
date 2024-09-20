const Permission = require("../models/Permission");

const permissionRepository = async (permissionData) => {
  try {
    const newPermission = await Permission.create(permissionData); 
    return newPermission; 
  } catch (error) {
    console.log(error); 
  }
};

module.exports = {
  permissionRepository,
}