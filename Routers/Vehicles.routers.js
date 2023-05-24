import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getVehicles,
	getVehicle
} from "../controllers/Vehicles.controller.js";

router.get('/', getVehicles)

router.get('/:vehicleID', getVehicle)

/*router.post('/', createVehicle) 

router.put('/:vehicleID', updateVehicle) 

router.delete('/:vehicleID', deleteVehicle)*/

export { router as vehicles_router }