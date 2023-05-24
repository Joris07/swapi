import mongoose from "mongoose";
const Schema = mongoose.Schema;

const starshipSchema = new Schema({
    _id : mongoose.Types.ObjectId,
    model: String,
    hyperdrive_rating: String,
    MGLT: String,
    starship_class: String,
    pilots: [
        {
            type: Schema.Types.ObjectId,
            ref: "People"
        }
    ]
});

const Starship = mongoose.model("Starship", starshipSchema);
export default Starship;