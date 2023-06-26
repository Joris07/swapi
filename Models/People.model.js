import mongoose from "mongoose";
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
	_id: Number,
	birth_year: String,
	eye_color: String,
	gender: String,
	edited: Date,
	created: {
		type : Date,
		default : Date.now
	},
	edited: {
		type : Date,
		default : Date.now
	},
	hair_color: String,
	height: String,
	homeworld: Number,
	mass: String,
	name: String,
	skin_color: String
}, 
{
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

peopleSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};
  
peopleSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const People = mongoose.model("People", peopleSchema);

export default People;