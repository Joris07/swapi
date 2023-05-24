#Connecter à mongo
démarrer le container
mongo
mongosh
use admin
db.auth("root", "1234")

#Insert in Collection
let vehiclesData = fs.readFileSync('data/vehicles.json');  
let vehicles = JSON.parse(vehiclesData);
db.collection("vehicles").insertMany(vehicles);
console.log("ok");