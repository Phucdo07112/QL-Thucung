const petRoutes = require("../routes/petRotues");
const categoryRoutes = require("../routes/categoryRoutes");
const adoptionRoutes = require("../routes/adoptionRoutes");
const productRoutes = require("../routes/productRoutes");

const routes = (app) => {
    app.use("/api/pets", petRoutes);
    app.use("/api/category", categoryRoutes);
    app.use("/api/adoption", adoptionRoutes);
    app.use("/api/product", productRoutes);
}

module.exports = routes

