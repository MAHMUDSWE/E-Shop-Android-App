const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require('morgan'); //logging requests

app.use(cors());
app.options(('*'), cors());

const dotenv = require('dotenv');
dotenv.config();

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan('tiny')); 

//Routes
const categoriesRoutes = require("./routes/categories.routes");
const productsRoutes = require("./routes/products.routes");
const usersRoutes = require("./routes/users.routes");
const ordersRoutes = require("./routes/orders.routes");


const api = process.env.API_URL;

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

module.exports = app;