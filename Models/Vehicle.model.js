import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
	_id : Number,
	model: String,
	created: {
		type : Date,
		default : Date.now
	},
	edited: {
		type : Date,
		default : Date.now
	},
	vehicle_class: String,
	pilots: Array
}, 
{
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

vehicleSchema.post(['init', "save"], function (doc) {
	if (doc && doc.pilots && doc.pilots.length > 0) {
	  	doc.pilots.forEach((pilot, index) => {
			doc.pilots[index] = {
				id: pilot,
				url: `/swapi/peoples/${pilot}`,
			};
		});
	}
});

vehicleSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};

vehicleSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;