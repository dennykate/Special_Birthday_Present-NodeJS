import express from "express";

import wishRoute from "./wish.route.js";

const api = express.Router();

api.use("/wish", wishRoute);

export default api;
