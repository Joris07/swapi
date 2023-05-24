import mongoose from "mongoose";
const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    birth_year: String,
    eye_color: String,
    gender: String,
    edited: Date,
    created: Date,
    hair_color: String,
    height: String,
    homeworld: Number,
    mass: String,
    name: String,
    skin_color: String
});

const People = mongoose.model("People", peopleSchema);

export default People;