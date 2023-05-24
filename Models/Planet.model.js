import mongoose from "mongoose";
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    _id : mongoose.Types.ObjectId,
    name : String,
    rotation_period: String,
    edited: Date,
    created: Date,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String
});

const Planet = mongoose.model("Planet", planetSchema);

export default Planet;