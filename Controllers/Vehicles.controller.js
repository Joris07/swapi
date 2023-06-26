import Vehicle from "../Models/Vehicle.model.js";

const getVehicles = (async (req, res) => {
	res.json(await Vehicle.find());
});

const getVehicle = (async (req, res) => {
	let id = req.params.vehicleID;
	let vehicle = await Vehicle.findOne({_id: id});
	if (!vehicle) return res.status(404).send('Vehicle not found')
	res.json(vehicle);
})

const createVehicle = (async (req, res) => {
	const vehicles = new Vehicle({...req.body});
	vehicles.save(function (err, vehicle) {
		if (err) res.json(err);;
		res.json(vehicle);
	});
});

const updateVehicle = (async (req, res) => {
	let id = req.params.vehicleID;
	let vehicle = await Vehicle.findOneAndUpdate(
		{_id : id},
		{...req.body},
		{new : true, upsert: true}
	);
	if (!vehicle) return res.status(404).send('Vehicle not update');
	res.json(vehicle);
});

const deleteVehicle = (async (req, res) => {
	let id = req.params.vehicleID;
	let vehicle = await Vehicle.findOneAndDelete(
		{_id : id}
	);
	if (!vehicle) return res.status(404).send('Vehicle not delete');
	res.json(vehicle);
});

export {
	getVehicles,
	getVehicle,
	createVehicle,
	updateVehicle,
	deleteVehicle
}