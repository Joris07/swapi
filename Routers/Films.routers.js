import Express from "express";

const router = Express.Router();

import {
	getFilms,
	getFilm,
	createFilm
} from "../controllers/Films.controller.js";

router.get('/', getFilms)

router.get('/:filmID', getFilm)

router.post('/', createFilm) 

/*router.put('/:filmID', updateFilm) 

router.delete('/:filmID', deleteFilm)*/

export { router as films_router }