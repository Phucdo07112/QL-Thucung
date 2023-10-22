const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true },
    phone: { type: Number },
    address: { type: String },
    avatar: {
      type: String,
      default:
        "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev\u003d2540745",
    },
    city: { type: String },
    heart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  {
    timestamps: true, //thoi gian tao va update
  }
);
const User = mongoose.model("User", userSchema);
module.exports = User;
