import mongoose from "mongoose";
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: String,
    characters: Array,
    planets: Array,
    starships: Array,
    vehicles: Array,
    species: Array,
    url: String,
}, {timestamp : true});

module.exports = mongoose.model("Film", filmSchema);