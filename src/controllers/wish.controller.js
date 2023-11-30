import _ from "lodash";

import { CREATE_WISH_SCHEMA } from "../schemas/wish.schema.js";
import { _create, _findAll } from "../services/wish.service.js";
import { success, error } from "./response.controller.js";

export const create = async (req, res, next) => {
  try {
    const wish = await _create(req);

    return success(res, wish, 201);
  } catch (e) {
    return error(res, { message: "Fail to process" });
  }
};

export const findAll = async (req, res, next) => {
  try {
    const wishs = await _findAll(req);

    return success(res, wishs);
  } catch (e) {
    return error(res, { message: "Fail to process" });
  }
};
