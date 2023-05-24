import People from "../Models/People.model.js";

const getPeoples = (async (req, res) => {
	res.json(await People.find());
});

const getPeople = (async (req, res) => {
	let id = Number(req.params.peopleID);
	let people = await People.findOne({pk : id});
	if (!people) return res.status(404).send('People not found')
	res.json(people);
});

export {
	getPeoples,
	getPeople
}