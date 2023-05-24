import Planet from "../Models/Planet.model.js";

const getPlanets = (async (req, res) => {
	res.json(await Planet.find());
});

const getPlanet = (async (req, res) => {
	let id = Number(req.params.planetID);
	let planet = await Planet.findOne({pk : id});
	if (!planet) return res.status(404).send('Planet not found')
	res.json(planet);
})

export {
	getPlanets,
	getPlanet
}