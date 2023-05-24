import Starship from "../Models/Starship.model.js";

const getStarships = (async (req, res) => {
	res.json(await Starship.find());
});

const getStarship = (async (req, res) => {
	let id = Number(req.params.starshipID);
	let starship = await Starship.findOne({pk : id});
	if (!starship) return res.status(404).send('Starship not found')
	res.json(starship);
})

export {
	getStarships,
	getStarship
}