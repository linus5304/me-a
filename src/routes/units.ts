import { Router } from 'express';
import { units } from '../utils/data';

const router = Router();

router.get('/', (_, res) => {
    res.send(units);
});

export default router;