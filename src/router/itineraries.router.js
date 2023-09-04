import { Router } from "express";
import itinerariesController from "../controllers/ItinerariesController.js";

const router = Router();

//CREATE localhost:8082/api/itineraries
router.post('/', itinerariesController.createItinerary);
//READ localhost:8082/api/itineraries
router.get('/', itinerariesController.getItineraries);
//READ localhost:8082/api/itineraries/:id
router.get('/:id', itinerariesController.getItineraryById);
//READ localhost:8082/api/itineraries/:country
router.get('/cities/:id', itinerariesController.getItinerariesByCity);
//UPDATE localhost:8082/api/itineraries/:id
router.put('/:id', itinerariesController.updateItinerary);
//DELETE localhost:8082/api/itineraries/:id
router.delete('/:id', itinerariesController.deleteItinerary);

export default router;