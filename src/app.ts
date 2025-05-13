import express from "express";

// var cors = require("cors");
export const app = express();

import feedRoutes from "./routes/feedRoutes";

// app.use(cors());

app.use(express.json());

app.use("/api/", feedRoutes);

export default app;

