import { Schema, model, modelNames } from "mongoose";

const wishSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  wish: {
    type: String,
    required: true,
  },
});

const WishModel = modelNames.Wish || model("Wish", wishSchema);

export default WishModel;
