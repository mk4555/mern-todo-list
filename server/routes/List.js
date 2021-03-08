import express from "express";
import { getLists, createList, updateList } from "../controllers/List.js";
const router = express.Router();

router.get("/", getLists);
router.post("/create", createList);
router.put("/update/:id", updateList);
export default router;
