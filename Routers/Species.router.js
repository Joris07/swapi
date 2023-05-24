import Express from "express";

const router = Express.Router();

import {
	getSpecies,
	getSpecie
} from "../controllers/Species.controller.js";

router.get('/', getSpecies)

router.get('/:specieID', getSpecie)

/*router.post('/', createFilm) 

router.put('/:filmID', updateFilm) 

router.delete('/:filmID', deleteFilm)*/

export { router as species_router }