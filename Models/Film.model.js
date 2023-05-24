import mongoose from "mongoose";
const Schema = mongoose.Schema;

const filmSchema = new Schema({
    _id : mongoose.Types.ObjectId,
    title: String,
    episode_id: Number,
    opening_crawl: String,
    director: String,
    producer: String,
    created: Date,
    release_date: String,
    edited: Date,
    characters: [
        {
            type: Schema.Types.ObjectId,
            ref: "People"
        }
    ],
    planets: [
        {
            type: Schema.Types.ObjectId,
            ref: "Planets"
        }
    ],
    starships: [
        {
            type: Schema.Types.ObjectId,
            ref: "Starships"
        }
    ],
    vehicles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Vehicles"
        }
    ],
    species: [
        {
            type: Schema.Types.ObjectId,
            ref: "Species"
        }
    ]
});

const Film = mongoose.model("Film", filmSchema);

export default Film;