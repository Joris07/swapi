import Specie from "../Models/Specie.model.js";

const getSpecies = (async (req, res) => {
	res.json(await Specie.find());
});

const getSpecie = (async (req, res) => {
	let id = Number(req.params.specieID);
	let specie = await Specie.findOne({pk : id});
	if (!specie) return res.status(404).send('Specie not found')
	res.json(specie);
})

export {
	getSpecies,
	getSpecie
}