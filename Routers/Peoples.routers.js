import Express from "express";

//const app = Express();
const router = Express.Router();

import {
	getPeoples,
	getPeople
} from "../Controllers/Peoples.controller.js";

router.get('/', getPeoples)

router.get('/:peopleID', getPeople)

/*router.post('/', createPeople) 

router.put('/:peopleID', updatePeople) 

router.delete('/:peopleID', deletePeople)*/

export { router as peoples_router }