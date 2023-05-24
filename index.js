import Express from "express";
import { peoples_router } from "./Routers/Peoples.routers.js";
import { films_router } from "./Routers/Films.routers.js";
import { planets_router } from "./Routers/planets.routers.js";
import { species_router } from "./Routers/Species.router.js";
import { starships_router } from "./Routers/Starships.routers.js";
import { vehicles_router } from "./Routers/Vehicles.routers.js";
import mongoose from "mongoose";


main().catch(err => console.log(err));

async function main() {
	const app = Express();

	app.listen(3000, () => {
			console.log('server is listening on port 3000')
	});
	
	await mongoose.connect('mongodb://root:1234@localhost:27017/swapi?authSource=admin')
	.then(() => console.log('connected'))
	.catch((err) => console.log(err));
	
	app.use(Express.json());
	app.use('/swapi/peoples', peoples_router);
	app.use('/swapi/films', films_router);
	app.use('/swapi/planets', planets_router);
	app.use('/swapi/species', species_router);
	app.use('/swapi/starships', starships_router);
	app.use('/swapi/vehicles', vehicles_router);
}
