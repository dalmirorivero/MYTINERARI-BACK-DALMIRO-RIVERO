import joi from "joi";
import joiPc from "joi-password-complexity";

// VALIDACION CONTRASEÑA
const complexity = {
    min: 8,
    max: 12,
    upperCase: 1,
    requirementCount: 3
};

//ESQUEMA DE VALIDACION PARA JOI
export const signUpSchema = joi.object({
    name: joi.string().required(),
    lname: joi.string(),
    mail: joi.string().email().required(),
    photo: joi.string().uri(),
    password: joiPc(complexity), 
    country: joi.string()
});