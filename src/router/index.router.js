import { Router } from "express"
import citiesRouter from "./cities.router.js"

const router = Router();

router.use('/cities', citiesRouter);

export default router;