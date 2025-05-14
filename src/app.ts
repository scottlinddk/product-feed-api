import express from "express";

// var cors = require("cors");
const app = express();
let baseUrl: string = "/api/";
import feedRoutes from "./routes/feedRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

// app.use(cors());

app.use(express.json());

if (process.env.NODE_ENV === "production") {
    baseUrl = "/";
}
app.use(`${baseUrl}`, feedRoutes);
app.use(errorHandler);

export default app;

