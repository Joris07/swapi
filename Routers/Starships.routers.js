import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getStarships,
	getStarship
} from "../controllers/Starships.controller.js";

router.get('/', getStarships)

router.get('/:starshipID', getStarship)

/*router.post('/', createStarship) 

router.put('/:starshipID', updateStarship) 

router.delete('/:starshipID', deleteStarship)*/

export { router as starships_router }