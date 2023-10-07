const ProductService = require("../services/ProductService");

exports.createProduct = async (req, res) => {
  try {
    const { name, description, imageLabel, category, image, price, rating, discount, countInStock,type, reviews } = req.body;
    console.log('req.body',req.body);
    if(!name || !image || !type || !price || !countInStock || !rating || !discount || !imageLabel){
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }

    const response = await ProductService.createProduct(req.body);
    return res.status(200).json(response);


  } catch (error) {
    res.status(404).json(error);
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const { limit, page, sort, filter} = req.query;
    const response = await ProductService.getAllProduct(Number(limit) || null, Number(page) || 0, sort, filter);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};
