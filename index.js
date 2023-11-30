import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import config from "./src/config/index.js";
import routes from "./src/routes/index.js";

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://special-birthday-present.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

// Enable CORS with specific options
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(config.API_PREFIX + "/v1", routes);

mongoose.connect(config.MONGO_URL).then(() => {
  console.log("DB connected");
  app.listen(config.PORT, () => {
    console.log(`Server running at port - ${config.PORT}`);
  });
});

export default app;
