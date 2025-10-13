const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true, // ✅ unique email
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["Admin", "Staff"],
    required: [true, "Role is required"],
  },
  access: {
    type: [String],
    default: [],
    validate: [arrayLimit, "Access must include at least one page"],
  },
}, { timestamps: true });

// Custom validator: at least one page in access
function arrayLimit(val) {
  return val.length > 0;
}

module.exports = mongoose.model("User", userSchema);
