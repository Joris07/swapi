import Express from "express";

const app = Express();
const router = app.router();

const { 
    getPeoples,
    getPeople,
    createPeople,
    updatePeople,
    deletePeople
} = require('../controllers/People.controller.js');

router.get('/', getPeoples)

router.get('/:peopleID', getPeople)

router.post('/', createPeople) 

router.put('/:peopleID', updatePeople) 

router.delete('/:peopleID', deletePeople)

module.exports = router