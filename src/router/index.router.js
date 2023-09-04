import { Router } from "express";
import citiesRouter from "./cities.router.js";
import userRouter from "./users.router.js";
import itineraryRouter from "./itineraries.router.js";

const router = Router();

router.use('/cities', citiesRouter);
router.use('/users', userRouter);
router.use('/itineraries', itineraryRouter);

export default router;