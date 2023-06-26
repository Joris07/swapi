import Express from "express";

const router = Express.Router();

import {
	getFilms,
	getFilm,
	createFilm,
	updateFilm,
	deleteFilm
} from "../Controllers/Films.controller.js";

router.get('/', getFilms)

router.get('/:filmID', getFilm)

router.post('/', createFilm) 

router.patch('/:filmID', updateFilm) 

router.delete('/:filmID', deleteFilm)

export { router as films_router }