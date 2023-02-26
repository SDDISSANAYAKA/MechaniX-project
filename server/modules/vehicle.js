const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const VehicleModelSchema = new Schema({
    
    VehicleNo: String,
    Vehicletype: String,
    VehicleMade: String,
    VehicleModel: String,
    Madeyear: String,
    fueltype: String
    
});

module.exports = mongoose.model("Vehicle", VehicleModelSchema)
