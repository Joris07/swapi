import mongoose from "mongoose";
const Schema = mongoose.Schema;

const specieSchema = new Schema({
    _id : mongoose.Types.ObjectId,
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
    people: [
        {
            type: Schema.Types.ObjectId,
            ref: "People"
        }
    ]
});

const Specie = mongoose.model("Specie", specieSchema);
export default Specie;