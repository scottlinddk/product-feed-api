import express from "express";

// var cors = require("cors");
const app = express();

import feedRoutes from "./routes/feedRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// app.use(cors());

app.use(express.json());

app.use("/api/", feedRoutes);
app.use(errorHandler);

export default app;

