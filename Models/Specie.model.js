import mongoose from "mongoose";
const Schema = mongoose.Schema;

const specieSchema = new Schema({
	_id : Number,
	name: String,
	classification: String,
	designation: String,
	created: {
		type : Date,
		default : Date.now
	},
	edited: {
		type : Date,
		default : Date.now
	},
	average_height: String,
	skin_colors: String,
	hair_colors: String,
	eye_colors: String,
	average_lifespan: String,
	homeworld: String,
	language: String,
	people: Array
}, 
{
	versionKey: false,
 	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

specieSchema.post(['init', "save"], function (doc) {
	if (doc && doc.people && doc.people.length > 0) {
	  	doc.people.forEach((people, index) => {
			doc.people[index] = {
				id: people,
				url: `/swapi/peoples/${people}`,
			};
		});
	}
});

specieSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};
  
specieSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const Specie = mongoose.model("Specie", specieSchema);
export default Specie;