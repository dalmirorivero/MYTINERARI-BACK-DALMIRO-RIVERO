import { Router } from "express";
import usersManager from "../controllers/UsersController.js";

const router = Router();

//CREATE localhost:8082/api/users
router.post('/', usersManager.createUser)
//READ localhost:8082/api/users
router.get('/', usersManager.getUsers)
//READ localhost:8082/api/users/:id
router.get('/:id', usersManager.getUserById)
//UPDATE localhost:8082/api/users/:id
router.put('/:id', usersManager.updateUser)
//DELETE localhost:8082/api/users/:id
router.delete('/:id', usersManager.deleteUser)

export default router;