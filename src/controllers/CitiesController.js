import City from "../models/City.js";

const citiesManager = {
    // CREATE 
    createCity: async(req, res) => {
        try {
            await City.create( req.body )
            res.status(201).json( { 
                success: true,
                message: 'City created!'
            })
        } catch (error) {
            res.status(500).json( {error} )
        }
    },
    // READ 
    getCities: async(req, res) => {
        try {
            const cities = await City.find()
            res.status(201).json( { response : cities } )
        } catch (error) {
            res.status(500).json( {error} )
        }
    },
    getCityById: async(req, res, next) => {
        try {
            const { id } = ( req.params )
            const city = await City.findById(id)
            if (city){
                res.status(201).json( { response : city } )
            } else {
                res.status(404).json({
                    success: false,
                    message: 'City id not found!'
            })}
        } catch (error) {
            next(error)
        }
    },
    // UPDATE
    updateCity: async(req, res, next) => {
        try {
            const { id } = ( req.params )
            const data = ( req.body )
            const city = await City.findByIdAndUpdate(id, data, { new : true })
            if (city && data){
            res.status(201).json({ 
                succes : true,
                message: 'City updated!',
                response: city
            })}
            else {
            res.status(404).json({
                success: false,
                message: 'City id not found!'
            })}
        } catch (error) {
            next(error)
        }        
    },
    // DELETE
    deleteCity: async(req, res, next) => {
        try {
            const { id } = ( req.params )
            const city = await City.findByIdAndDelete(id)
            if (city){
            res.status(201).json({ 
                succes : true,
                message: 'City deleted!'
            })}
            else {
            res.status(404).json({
            success: false,
            message: 'City id not found!'
            })}
        } catch (error) {
            next(error)
        }   
    }
};

export default citiesManager;