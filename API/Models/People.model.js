import mongoose from "mongoose";
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    id : Number,
    birth_year: String,
    eye_color: String,
    films: Array,
    gender: String,
    hair_color: String,
    height: String,
    homeworld: String,
    mass: String,
    name: String,
    skin_color: String,
    species: String,
    starships: Array,
    url: String,
    vehicles: Array
}, {timestamp : true});

module.exports = mongoose.model("People", peopleSchema);