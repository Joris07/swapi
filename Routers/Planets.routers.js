import Express from "express";

const router = Express.Router();

import {
	getPlanets,
	getPlanet,
	createPlanet,
	updatePlanet,
	deletePlanet
} from "../Controllers/Planets.controller.js";

router.get('/', getPlanets)

router.get('/:planetID', getPlanet)

router.post('/', createPlanet) 

router.patch('/:planetID', updatePlanet) 

router.delete('/:planetID', deletePlanet)

export { router as planets_router }