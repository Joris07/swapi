import Vehicle from "../Models/Vehicle.model.js";

const getVehicles = (async (req, res) => {
	res.json(await Vehicle.find());
});

const getVehicle = (async (req, res) => {
	let id = Number(req.params.vehicleID);
	let vehicle = await Vehicle.findOne({pk: id});
	if (!vehicle) return res.status(404).send('Vehicle not found')
	res.json(vehicle);
})

export {
	getVehicles,
	getVehicle
}