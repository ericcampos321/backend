const IRoles = {
  admin: {
    description: "Administrador do sistema com acesso a todas as funcionalidades",
    permissions: [
      "create",
      "edit",
      "delete",
      "read",
      "manageUsers",
      "manageRoles",
      "managePermissions",
    ],
  },
  assistant: {
    description: "Assistente do sistema com acesso a funcionalidades limitadas",
    permissions: [
      "create",
      "edit"
    ]
  },
  user: {
    description: "Usuário do sistema com acesso a funcionalidades limitadas",
    permissions: [
      "read"
    ]
  }
};

module.exports = IRoles;


