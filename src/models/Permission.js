const mongoose = require("mongoose");

const PermissionSchema = new mongoose.Schema({

  role: {
    type: String,
    required: true,
    enum: ["admin", "assistant", "user"],
    default: "user"
  },
  description: {
    type: String,
    required: true
  },
  permissions: {
    type: [String],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Permission = mongoose.model("Permission", PermissionSchema);

module.exports = Permission;