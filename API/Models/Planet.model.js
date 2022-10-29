import mongoose from "mongoose";
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    name : String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: Array,
    films: Array,
    url: String,
}, {timestamp : true});

module.exports = mongoose.model("Planet", planetSchema);