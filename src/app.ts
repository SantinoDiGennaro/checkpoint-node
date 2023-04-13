const express = require("express");
import "express-async-errors";
import dataRoutes from "./lib/route";

const app = express();
app.use(express.json());

app.use(dataRoutes);
export default app;
