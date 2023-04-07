import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());


import mongoose from 'mongoose';
    mongoose.connect(process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/tuiter");

import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";

HelloController(app);
UserController(app);
TuitController(app);
app.listen(process.env.PORT || 4000);