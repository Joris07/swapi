import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getStarships,
	getStarship,
	createStarship,
	updateStarship,
	deleteStarship
} from "../controllers/Starships.controller.js";

router.get('/', getStarships)

router.get('/:starshipID', getStarship)

router.post('/', createStarship) 

router.patch('/:starshipID', updateStarship) 

router.delete('/:starshipID', deleteStarship)

export { router as starships_router }