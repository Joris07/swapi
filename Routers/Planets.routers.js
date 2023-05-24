import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getPlanets,
	getPlanet
} from "../controllers/Planets.controller.js";

router.get('/', getPlanets)

router.get('/:planetID', getPlanet)

/*router.post('/', createPlanet) 

router.put('/:planetID', updatePlanet) 

router.delete('/:planetID', deletePlanet)*/

export { router as planets_router }