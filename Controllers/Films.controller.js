import Film from "../Models/Film.model.js";

const getFilms = (async (req, res) => {
	res.json(await Film.find());
});

const getFilm = (async (req, res) => {
	let id = Number(req.params.filmID);
	let film = await Film.findOne({pk : id});
	if (!film) return res.status(404).send('Film not found')
	res.json(film);
});

const createFilm = (async (req, res) => {
	const films = new Film({...req.body});
	const insertedFilms = films.save();
	res.json(insertedFilms);
});

export {
	getFilms,
	getFilm,
	createFilm
}