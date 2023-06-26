import Express from "express";

const router = Express.Router();

import {
	getSpecies,
	getSpecie,
	createSpecie,
	updateSpecie,
	deleteSpecie
} from "../Controllers/Species.controller.js";

router.get('/', getSpecies)

router.get('/:specieID', getSpecie)

router.post('/', createSpecie) 

router.patch('/:specieID', updateSpecie) 

router.delete('/:specieID', deleteSpecie)

export { router as species_router }