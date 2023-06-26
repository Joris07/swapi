import mongoose from "mongoose";
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
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
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: Array
}, 
{
	versionKey: false,
	timestamps: {
		createdAt: 'created',
		updatedAt: 'edited'
	}
});

starshipSchema.post(['init', "save"], function (doc) {
	if (doc && doc.pilots && doc.pilots.length > 0) {
	  	doc.pilots.forEach((pilot, index) => {
			doc.pilots[index] = {
				id: pilot,
				url: `/swapi/peoples/${pilot}`,
			};
		});
	}
});

starshipSchema.statics.getNextId = async function () {
	const result = await this.findOne({}, '_id').sort({ _id: -1 }).limit(1);
	return result ? result._id + 1 : 1;
};
  
starshipSchema.pre('save', async function (next) {
	if (!this._id) {
		this._id = await this.constructor.getNextId();
	}
	next();
});

const Starship = mongoose.model("Starship", starshipSchema);
export default Starship;