import { Router } from "express";
import { figures } from '../utils/data';

const router = Router();

router.get("/", (_, res) => {
    res.send(figures);
});

export default router;