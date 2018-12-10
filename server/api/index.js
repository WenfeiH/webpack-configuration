import express from "express";
import Menu from "./menu";
import User from "./user";
import News from "./news";
const router = express.Router();

router.get("/menu", Menu);
router.get("/user", User);
router.get("/news", News);

export default router;
