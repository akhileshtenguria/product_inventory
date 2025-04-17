const express = require('express');
const productRoutes = require('./routes/productRoutes');
const mongodb = require("./config/db");
const dotenv = require("dotenv").config();
const app = express();
const path = require("path");
const PORT=8000;
mongodb();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/inventory", productRoutes);
// app.use("/api/v1/inventory", productRoutes);


app.listen(PORT, () =>  console.log(`server working on PORT ${PORT}`));