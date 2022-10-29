import { MongoClient } from "mongodb";

async function connectDB() {
	const client = new MongoClient('mongodb://root:1234@localhost:27017');
	await client.connect();
	return client.db('swapi');
}

const getPeoples = (async (req, res) => {
	const db = await connectDB();
	db.collection("people").find({}).toArray(function (err, result) {
        res.json(result);
    });
});

module.exports = {
    getPeoples
}