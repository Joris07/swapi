import mongoose from "mongoose";
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    _id : mongoose.Types.ObjectId,
    model: String,
    vehicle_class: String,
    pilots: [
        {
            type: Schema.Types.ObjectId,
            ref: "People"
        }
    ]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
export default Vehicle;