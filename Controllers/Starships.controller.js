import Starship from "../Models/Starship.model.js";

const getStarships = (async (req, res) => {
	res.json(await Starship.find());
});

const getStarship = (async (req, res) => {
	let id = req.params.starshipID;
	let starship = await Starship.findOne({_id : id});
	if (!starship) return res.status(404).send('Starship not found')
	res.json(starship);
})

const createStarship = (async (req, res) => {
	const starships = new Starship({...req.body});
	starships.save(function (err, starship) {
		if (err) res.json(err);;
		res.json(starship);
	});
});

const updateStarship = (async (req, res) => {
	let id = req.params.starshipID;
	let starship = await Starship.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!starship) return res.status(404).send('Starship not update');
	res.json(starship);
});

const deleteStarship = (async (req, res) => {
	let id = req.params.starshipID;
	let starship = await Starship.findOneAndDelete(
		{_id : id}
	);
	if (!starship) return res.status(404).send('Starship not delete');
	res.json(starship);
});

export {
	getStarships,
	getStarship,
	createStarship,
	updateStarship,
	deleteStarship
}