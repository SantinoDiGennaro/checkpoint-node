import { isExportSpecifier } from "typescript";
import prisma from "./prisma";
import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
    const data = await prisma.database.findMany();
    res.status(200).json(data);
});

router.post("/", async (req, res) => {
    const datas = req.body;

    const data = await prisma.database.create({ data: datas });
    res.status(201).json(data);
});

export default router;
