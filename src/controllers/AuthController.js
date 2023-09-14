import User from "../models/User.js";
import jwt from "jsonwebtoken";

const authController = {
    // REGISTRO
    signUp: async (req, res, next) => {
        try {
            const userData = await User.create(req.body)
            return res.status(201).json({
                success: true,
                user: userData,
                message: 'Sign up successfully.'
            })
        } catch (error) {
            next(error)
        }
    },
    // INICIO DE SESION
    signIn: async (req, res, next) => {
        try {
            let mail = req.body.mail
            let one = await User.findOne({ mail })
            if (!one) {
                return res.status(404).json({
                    status: 'error',
                    message: 'User not found.'
                })
            }
            let token = jwt.sign({ mail }, process.env.SECRETKEY, { expiresIn: 60 * 60 * 24 })
            return res.status(200).json({
                success: true,
                clave: token,
                message: mail + ' logged in successfully.',
                user: one
            })
        } catch (error) {
            next(error)
        }
    },
    // INICIO DE SESION (PASSPORT + JWT)
    logIn: (req, res) => {
        const response = {
            mail: req.user.email,
            photo: req.user.photo,
            name: req.user.name,
            lname: req.user.lname,
            country: req.user.country,
            _id: req.user._id
        }
        return res.status(200).json({
            success: true,
            user: response,
            message: 'Logged in successfully.',
        })
    },
    // CIERRE DE SESION
    logOut: (req, res, next) => {
        try {
            return res.status(200).json({
                succes: true,
                message: 'User logged out.',
            })
        } catch (error) {
            next(error)
        }
    }
};

export default authController;