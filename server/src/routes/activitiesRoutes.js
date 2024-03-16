const { Router } = require("express");
const { activitiesHandler, activitiesPostHandler } = require("../handlers/activitiesHandlers");

const activitiesRouter = Router();

activitiesRouter.get("/", activitiesHandler);

activitiesRouter.post("/", activitiesPostHandler);

module.exports = activitiesRouter;