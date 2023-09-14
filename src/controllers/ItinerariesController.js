import Itinerary from "../models/Itinerary.js";

const itineraryManager = {
    // CREATE 
    createItinerary: async (req, res) => {
        try {
            await Itinerary.create(req.body)
            res.status(201).json({
                success: true,
                message: 'Itinerary created!'
            })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    // READ
    getItineraries: async (req, res) => {
        try {
            const itineraries = await Itinerary.find()
            res.status(201).json({ response: itineraries })
        } catch (error) {
            res.status(500).json({ error })
        }
    },
    getItineraryById: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const itinerary = await Itinerary.findById(id)
            if (itinerary) {
                res.status(201).json({ response: itinerary })
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Itinerary id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    },
    getItinerariesByCity: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const itineraries = await Itinerary.find({ city_id: id })
                .populate('user_id')
            res.status(201).json({ response: itineraries });
        } catch (error) {
            next(error)
        }
    },
    // UPDATE
    updateItinerary: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const data = (req.body)
            const itinerary = await Itinerary.findByIdAndUpdate(id, data, { new: true })
            if (itinerary && data) {
                res.status(201).json({
                    succes: true,
                    message: 'Itinerary updated!',
                    response: itinerary
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'Itinerary id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    },
    // DELETE
    deleteItinerary: async (req, res, next) => {
        try {
            const { id } = (req.params)
            const itinerary = await Itinerary.findByIdAndDelete(id)
            if (itinerary) {
                res.status(201).json({
                    succes: true,
                    message: 'Itinerary deleted!'
                })
            }
            else {
                res.status(404).json({
                    success: false,
                    message: 'Itinerary id not found!'
                })
            }
        } catch (error) {
            next(error)
        }
    }
};

export default itineraryManager;