const Product = require("../models/Product");

exports.create = async (req, res) => {
  try {
    const { name, description, imageLabel, category, image, price } = req.body;

    const created = await Product.create({
      name,
      description,
      imageLabel,
      category,
      image,
      price,
    });

    res.json({ message: "Product successfuly created.", created });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
