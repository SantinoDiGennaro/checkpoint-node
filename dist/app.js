"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
require("express-async-errors");
const route_1 = __importDefault(require("./lib/route"));
const app = express();
app.use(express.json());
app.use(route_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map