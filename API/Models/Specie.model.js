import mongoose from "mongoose";
const Schema = mongoose.Schema;

const specieSchema = new Schema({
    name: String,
    classification: String,
    designation: String,
    average_height: String,
    skin_colors: String,
    hair_colors: String,
    eye_colors: String,
    average_lifespan: String,
    homeworld: String,
    language: String,
    people: Array,
    films: Array,
    url: String,
}, {timestamp : true});

module.exports = mongoose.model("Specie", specieSchema);