import express from "express";
import { getLists, createList } from "../controllers/List.js";
const router = express.Router();

router.get("/", getLists);
router.post("/create", createList);
export default router;
