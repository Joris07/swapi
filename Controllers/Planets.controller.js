import Planet from "../Models/Planet.model.js";

const getPlanets = (async (req, res) => {
	res.json(await Planet.find());
});

const getPlanet = (async (req, res) => {
	let id = req.params.planetID;
	let planet = await Planet.findOne({_id : id});
	if (!planet) return res.status(404).send('Planet not found')
	res.json(planet);
})

const createPlanet = (async (req, res) => {
	const planets = new Planet({...req.body});
	planets.save(function (err, planet) {
		if (err) res.json(err);;
		res.json(planet);
	});
});

const updatePlanet = (async (req, res) => {
	let id = req.params.planetID;
	let planet = await Planet.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!planet) return res.status(404).send('Planet not update');
	res.json(planet);
});

const deletePlanet = (async (req, res) => {
	let id = req.params.planetID;
	let planet = await Planet.findOneAndDelete(
		{_id : id}
	);
	if (!planet) return res.status(404).send('Planet not delete');
	res.json(planet);
});

export {
	getPlanets,
	getPlanet,
	createPlanet,
	updatePlanet,
	deletePlanet
}