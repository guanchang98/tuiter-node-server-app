import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitController from "./controllers/tuits/tuits-controller.js";


HelloController(app);
UserController(app);
TuitController(app);
app.listen(4000);