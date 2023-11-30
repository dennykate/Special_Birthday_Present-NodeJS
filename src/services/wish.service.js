import * as R from "ramda";

import wishModel from "../models/wish.model.js";

export const _create = async (req) => {
  try {
    const data = req.body;

    return await wishModel.create(data);
  } catch (error) {
    throw error;
  }
};

export const _findAll = async (req) => {
  try {
    const query = req.query;
    const page = parseInt(query.page) || 1;
    const limit = 12;
    const skip = (page - 1) * limit;

    const total = await wishModel.countDocuments();
    let wishes = await wishModel
      .find()
      .sort({ _id: -1 })
      .skip(skip)
      .limit(limit);

    wishes = wishes.map((wish) => {
      return R.omit([], wish);
    });

    return { wishes, total };
  } catch (error) {
    throw error;
  }
};
