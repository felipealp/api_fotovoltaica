
const UserController = require("../app/controllers/UserController");

const routes = require("express").Router();

// User
routes.post("/users", UserController.create);
routes.get("/users", UserController.findAll);
routes.get("/users/:name", UserController.findOneByName);
routes.get("/user/:id", UserController.findOne);
routes.put("/users/:id/validate", UserController.validate);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);

module.exports = routes;