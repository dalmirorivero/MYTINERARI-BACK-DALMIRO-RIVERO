import passport from "passport";
import User from "../models/User.js";
import { Strategy, ExtractJwt } from "passport-jwt";

// CONFIGURACION PARA LA ESTRATEGIA
const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY
};

// FUNCION PARA LA ESTRATEGIA
const fn = async (payload, done) => {
    try {
        let one = await User.findOne({ mail: payload.mail })
        if (!one) {
            return done(null, false, { message: 'User not found.' })
        } else {
            return done(null, one)
        }
    } catch (error) {
        return done(error)
    }
};

export default passport.use(new Strategy(opt, fn));