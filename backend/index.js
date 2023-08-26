const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("tiny"));

const petRoutes = require("./routes/petRotues");
const categoryRoutes = require("./routes/categoryRoutes");
const adoptionRoutes = require("./routes/adoptionRoutes");
const accessoryRoutes = require("./routes/accessoryRoutes");

app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/pets", petRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/adoption", adoptionRoutes);
app.use("/api/accessory", accessoryRoutes);

const mongodbUri = "mongodb+srv://qlthucung1:2Kwhm2YTFYnPwkz7@cluster0.d0zaumm.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongodbUri, {
  useNewUrlParser: true,
});
``;

mongoose.connection.on("connected", () => {
  console.log("Connected to mongodb...");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to mongo", err);
});

app.listen(4001, () => {
  console.log("App is running on PORT 4001");
});
