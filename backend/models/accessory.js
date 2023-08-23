const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    imageLabel: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    image: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = Pet = mongoose.model("Accessory", PetSchema);
