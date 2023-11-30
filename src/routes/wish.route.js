import express from "express";

import { create, findAll } from "../controllers/wish.controller.js";
import { isValid } from "../middlewares/isValid.middleware.js";
import { CREATE_WISH_SCHEMA } from "../schemas/wish.schema.js";

const wishRouter = express.Router();

wishRouter.post("/", isValid({ schema: CREATE_WISH_SCHEMA }), create);
wishRouter.get("/", findAll);

export default wishRouter;
