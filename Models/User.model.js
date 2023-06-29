import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
	_id : Number,
	username: String,
	password: String
}, 
{
	versionKey: false
});


const User = mongoose.model("User", userSchema);

export default User;