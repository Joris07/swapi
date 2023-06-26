import Express from "express";

const router = Express.Router();

import {
	getPeoples,
	getPeople,
	createPeople,
	updatePeople,
	deletePeople
} from "../Controllers/Peoples.controller.js";

router.get('/', getPeoples)

router.get('/:peopleID', getPeople)

router.post('/', createPeople) 

router.patch('/:peopleID', updatePeople) 

router.delete('/:peopleID', deletePeople)

export { router as peoples_router }