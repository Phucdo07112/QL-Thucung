const Product = require("../models/Product");

const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const {
      name,
      image,
      type,
      price,
      countInStock,
      rating,
      description,
      discount,
      selled,
    } = newProduct;
    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: "OK",
          message: "the name of product is already",
        });
      }

      const createProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
        discount,
        selled,
      });
      if (createProduct) {
        resolve({
          status: "OK",
          message: "Success",
          data: createProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProdcut = await Product.findById(id);
      if (checkProdcut === null) {
        resolve({
          status: "OK",
          message: "the product is not defined",
        });
      }
      
      const updateProduct = await Product.findByIdAndUpdate(id, data, { new: true }) //new: true : lay moi nhat
      
      resolve({
        status: "OK",
        message: "Success",
        data: updateProduct
      });
    } catch (e) {
      reject(e.message);
    }
  });
};


const getDetailProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findById(id);
      if (product === null) {
        resolve({
          status: "OK",
          message: "the user is not defined",
        });
      }

      
      resolve({
        status: "OK",
        message: "Success",
        data: product
      });
    } catch (e) {
      reject(e);
    }
  });
};

const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findById(id);
      if (checkProduct === null) {
        resolve({
          status: "OK",
          message: "the product is not defined",
        });
      }
      
      await Product.findByIdAndDelete(id)

      
      resolve({
        status: "OK",
        message: "Delete product success"
      });
    } catch (e) {
      reject(e.message);
    }
  });
};

const getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
        const totalProduct = await Product.count()
        let allProduct = []
        if (filter) {
            const label = filter[0];
            const allObjectFilter = await Product.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allObjectFilter,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        }
        if (sort) {
            const objectSort = {}
            objectSort[sort[1]] = sort[0]
            const allProductSort = await Product.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allProductSort,
                total: totalProduct,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalProduct / limit)
            })
        }
        if(!limit) {
            allProduct = await Product.find().sort({createdAt: -1, updatedAt: -1})
        }else {
            allProduct = await Product.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
        }
        resolve({
            status: 'OK',
            message: 'Success',
            data: allProduct,
            total: totalProduct,
            pageCurrent: Number(page + 1),
            totalPage: Math.ceil(totalProduct / limit)
        })
    } catch (e) {
        reject(e)
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailProduct,
  deleteProduct,
  getAllProduct
};
