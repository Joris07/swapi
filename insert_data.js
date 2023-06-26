import { MongoClient } from "mongodb";
import * as fs from "fs";

const client = new MongoClient('mongodb://root:1234@localhost:27017');
const connexion = await client.connect();

fs.readdir("data", async function (err, files) {
    const db = client.db("swapi");
    db.createCollection("films");
    db.createCollection("peoples");
    db.createCollection("planets");
    db.createCollection("species");
    db.createCollection("starships");
    db.createCollection("vehicles");
    for (let file of files) {
        let la_jsonData = [];
        fs.readFile('data/' + file, 'utf8', async (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            for (let donnee of JSON.parse(data)) {
                let la_tempData = donnee.fields;
                la_tempData["_id"] = donnee.pk;
                la_jsonData.push(la_tempData);
            }
            db.collection(file.split(".")[0]).insertMany(la_jsonData);
        });
    }
});




