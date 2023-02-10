const fighterController = require("../controllers/fighterController");
const express = require("express");
const fighterRouter = express.Router();

fighterRouter
  .route("/")
  .get(fighterController.getAllFighters)
  .post(fighterController.addFighter);
fighterRouter
  .route("/:id")
  .get(fighterController.getFighter)
  .patch(fighterController.updateFighter)
  .delete(fighterController.deleteFighter);

module.exports = fighterRouter;
