import { ReturnDocument } from "mongodb";
import Film from "../Models/Film.model.js";

const getFilms = (async (req, res) => {
	res.json(await Film.find());
});

const getFilm = (async (req, res) => {
	let id = req.params.filmID;
	let film = await Film.findOne({_id : id});
	if (!film) return res.status(404).send('Film not found')
	res.json(film);
});

const createFilm = (async (req, res) => {
	const films = new Film({...req.body});
	films.save(function (err, film) {
		if (err) res.json(err);;
		res.json(film);
	});
});

const updateFilm = (async (req, res) => {
	let id = req.params.filmID;
	let film = await Film.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!film) return res.status(404).send('Film not update');
	res.json(film);
});

const deleteFilm = (async (req, res) => {
	let id = req.params.filmID;
	let film = await Film.findOneAndDelete(
		{_id : id}
	);
	if (!film) return res.status(404).send('Film not delete');
	res.json(film);
});

export {
	getFilms,
	getFilm,
	createFilm,
	updateFilm,
	deleteFilm
}