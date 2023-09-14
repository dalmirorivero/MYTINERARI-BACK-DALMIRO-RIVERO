import { Router } from "express";
import authRouter from "./api/auth.router.js"
import userRouter from "./api/users.router.js";
import citiesRouter from "./api/cities.router.js";
import itineraryRouter from "./api/itineraries.router.js";

const router = Router();

// ( localhost:8082/api/cities )
router.use('/cities', citiesRouter);

// ( localhost:8082/api/users )
router.use('/users', userRouter);

// ( localhost:8082/api/itineraries )
router.use('/itineraries', itineraryRouter);

// ( localhost:8082/api/auth )
router.use('/auth', authRouter);

export default router;