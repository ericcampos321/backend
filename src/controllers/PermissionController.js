const { Permission } = require("../models");

// Create a new permission
const createPermission = async (req, res) => {

  try {
    const { role, description, permissions } = req.body;
    const newPermission = await Permission.create({ role, description, permissions });

    if (!newPermission) {
      res.status(422).json({ errors: ["Houve um erro, por favor tente mais tarde"] });
      return;
    }
    
    res.status(201).json(newPermission);

  } catch (error) {
    res.status(500).json({ errors: ["Erro no servidor, tente novamente mais tarde!"] });
  }
};


module.exports = {
  createPermission,
}

// Get all permissions