import { Router } from "express";
import { signUpSchema } from "../../schemas/signUp.js";
import hash from "../../middlewares/hashPassword.js";
import passport from "../../middlewares/passport.js";
import valid from "../../middlewares/validPassword.js";
import validator from "../../middlewares/validatorReg.js";
import authController from "../../controllers/AuthController.js";

const router = Router();

// REGISTER ( localhost:8082/api/auth )
router.post('/', validator(signUpSchema), hash, authController.signUp);

// LOGIN ( localhost:8082/api/auth/login )
router.post('/login', valid, authController.signIn);

// LOGIN JWT + PASSPORT ( localhost:8082/api/auth/signin )
router.get('/signin', passport.authenticate('jwt', {session:false}), authController.logIn);

// LOG OUT ( localhost:8082/api/auth/logout )
router.post('/logout', passport.authenticate('jwt', {session:false}), authController.logOut);

export default router;