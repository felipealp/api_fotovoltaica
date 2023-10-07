const express = require("express");
const cors = require("cors");

const app = express();

// Allows access to all external domains
app.use(cors());
// Allows sending data in the request with json format
app.use(express.json());

// Environment variables
require('dotenv/config');

// Models and Sequelize conecction access
const db = require("./app/models");
db.sequelize.sync();

// Home route
app.get("/", (req, res) => {
  res.json({ message: "welcome to eletronmic point api" });
});

// App routes
app.use('/api', require("./start/routes.js"));

// Changes application port
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}.`);
});