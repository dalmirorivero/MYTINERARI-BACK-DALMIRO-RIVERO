import { Router } from "express";
import citiesManager from "../controllers/CitiesController.js";

const router = Router();

//CREATE localhost:8082/api/cities
router.post('/', citiesManager.createCity);
//READ localhost:8082/api/cities
router.get('/', citiesManager.getCities);
//READ localhost:8082/api/cities/:id
router.get('/:id', citiesManager.getCityById);
//UPDATE localhost:8082/api/cities/:id
router.put('/:id', citiesManager.updateCity);
//DELETE localhost:8082/api/cities/:id
router.delete('/:id', citiesManager.deleteCity);

export default router;