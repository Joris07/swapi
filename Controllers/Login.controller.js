import User from "../Models/User.model.js";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();

function generateAccessToken(user) {
	return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 604800 });
}

const loginUser = (async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let user = await User.findOne({username: username, password: password});
	if (!user) return res.status(404).send('User not found');
	else {
		const accessToken = generateAccessToken(user);
		res.json({accessToken});
	}
})

export {
	loginUser
}