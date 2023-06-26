import People from "../Models/People.model.js";

const getPeoples = (async (req, res) => {
	res.json(await People.find());
});

const getPeople = (async (req, res) => {
	let id = req.params.peopleID;
	let people = await People.findOne({_id : id});
	if (!people) return res.status(404).send('People not found')
	res.json(people);
});

const createPeople = (async (req, res) => {
	const peoples = new People({...req.body});
	peoples.save(function (err, people) {
		if (err) res.json(err);;
		res.json(people);
	});
});

const updatePeople = (async (req, res) => {
	let id = req.params.peopleID;
	let people = await People.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!people) return res.status(404).send('People not update');
	res.json(people);
});

const deletePeople = (async (req, res) => {
	let id = req.params.peopleID;
	let people = await People.findOneAndDelete(
		{_id : id}
	);
	if (!people) return res.status(404).send('People not delete');
	res.json(people);
});

export {
	getPeoples,
	getPeople,
	createPeople,
	updatePeople,
	deletePeople
}