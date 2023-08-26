const Accessory = require("../models/Accessory");

exports.create = async (req, res) => {
  try {
    const { name, description, imageLabel, category, image, price } = req.body;

    const created = await Accessory.create({
      name,
      description,
      imageLabel,
      category,
      image,
      price,
    });

    res.json({ message: "Adooptions successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
