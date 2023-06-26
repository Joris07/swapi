import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getVehicles,
	getVehicle,
	createVehicle,
	updateVehicle,
	deleteVehicle
} from "../controllers/Vehicles.controller.js";

router.get('/', getVehicles)

router.get('/:vehicleID', getVehicle)

router.post('/', createVehicle) 

router.patch('/:vehicleID', updateVehicle) 

router.delete('/:vehicleID', deleteVehicle)

export { router as vehicles_router }