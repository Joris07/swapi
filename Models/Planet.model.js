import mongoose from "mongoose";
const Schema = mongoose.Schema;

const planetSchema = new Schema({
	_id : Number,
	name : String,
	rotation_period: String,
	edited: Date,
	created: {
		type : Date,
		default : Date.now
	},
	edited: {
		type : Date,
		default : Date.now
	},
	orbital_period: String,
	diameter: String,
	climate: String,
	gravity: String,
	terrain: String,
	surface_water: String,
	population: String
}, 
{
	versionKey: false,
  	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

planetSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};
  
planetSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;