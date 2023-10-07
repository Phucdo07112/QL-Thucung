const petRoutes = require("../routes/petRotues");
const categoryRoutes = require("../routes/categoryRoutes");
const adoptionRoutes = require("../routes/adoptionRoutes");
const productRoutes = require("../routes/productRoutes");
const userRoutes = require("../routes/userRoutes");
const OrderRoutes = require("../routes/OrderRoutes");

const routes = (app) => {
    app.use("/api/pets", petRoutes);
    app.use("/api/category", categoryRoutes);
    app.use("/api/adoption", adoptionRoutes);
    app.use("/api/product", productRoutes);
    app.use("/api/user", userRoutes);
    app.use("/api/order", OrderRoutes);
}

module.exports = routes

