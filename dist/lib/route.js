"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./prisma"));
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const data = await prisma_1.default.database.findMany();
    res.status(200).json(data);
});
router.post("/", async (req, res) => {
    const datas = req.body;
    const data = await prisma_1.default.database.create({ data: datas });
    res.status(201).json(data);
});
exports.default = router;
//# sourceMappingURL=route.js.map