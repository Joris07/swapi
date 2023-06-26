import Specie from "../Models/Specie.model.js";

const getSpecies = (async (req, res) => {
	res.json(await Specie.find());
});

const getSpecie = (async (req, res) => {
	let id = req.params.specieID;
	let specie = await Specie.findOne({_id : id});
	if (!specie) return res.status(404).send('Specie not found')
	res.json(specie);
})

const createSpecie = (async (req, res) => {
	const species = new Specie({...req.body});
	species.save(function (err, specie) {
		if (err) res.json(err);;
		res.json(specie);
	});
});

const updateSpecie = (async (req, res) => {
	let id = req.params.specieID;
	let specie = await Specie.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!specie) return res.status(404).send('Specie not update');
	res.json(specie);
});

const deleteSpecie = (async (req, res) => {
	let id = req.params.specieID;
	let specie = await Specie.findOneAndDelete(
		{_id : id}
	);
	if (!specie) return res.status(404).send('Specie not delete');
	res.json(specie);
});

export {
	getSpecies,
	getSpecie,
	createSpecie,
	updateSpecie,
	deleteSpecie
}