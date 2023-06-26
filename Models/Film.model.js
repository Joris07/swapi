import mongoose from "mongoose";
const Schema = mongoose.Schema;

const filmSchema = new Schema({
	_id : Number,
	title: String,
	episode_id: Number,
	opening_crawl: String,
	director: String,
	producer: String,
	created: {
		type : Date,
		default : Date.now
	},
	release_date: String,
	edited: {
		type : Date,
		default : Date.now
	},
	characters: Array,
	planets: Array,
	starships: Array,
	vehicles: Array,
	species: Array
}, 
{
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

filmSchema.post(['init', "save"], function (doc) {
	if (doc && doc.characters && doc.characters.length > 0) {
	  	doc.characters.forEach((character, index) => {
			doc.characters[index] = {
				id: character,
				url: `/swapi/peoples/${character}`,
			};
		});
	}
	if (doc && doc.planets && doc.planets.length > 0) {
		doc.planets.forEach((planet, index) => {
		  	doc.planets[index] = {
			  	id: planet,
			  	url: `/swapi/planets/${planet}`,
			};
		});
	}
	if (doc && doc.starships && doc.starships.length > 0) {
		doc.starships.forEach((starship, index) => {
		  	doc.starships[index] = {
			  	id: starship,
			  	url: `/swapi/starships/${starship}`,
			};
		});
	}
	if (doc && doc.vehicles && doc.vehicles.length > 0) {
		doc.vehicles.forEach((vehicle, index) => {
		  	doc.vehicles[index] = {
			  	id: vehicle,
			  	url: `/swapi/vehicles/${vehicle}`,
			};
		});
	}
	if (doc && doc.species && doc.species.length > 0) {
		doc.species.forEach((specie, index) => {
		  	doc.species[index] = {
			  	id: specie,
			  	url: `/swapi/species/${specie}`,
			};
		});
	}
});

filmSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};
  
filmSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const Film = mongoose.model("Film", filmSchema);

export default Film;