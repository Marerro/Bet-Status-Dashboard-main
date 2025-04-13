const Router = require("express").Router;
const betsController = require("../controllers/bet.controller");

const betsRouter = new Router();

betsRouter.get("/", betsController.getAllBets);
betsRouter.post("/:id", betsController.changeStatusById);

module.exports = betsRouter;
