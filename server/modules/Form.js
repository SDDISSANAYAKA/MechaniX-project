const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const FormModelSchema = new Schema({

    VehicleNo: String,
    name: String,
    phone: String,
    ProblemStatement: String,
    Date: String,
});

module.exports = mongoose.model("Form", FormModelSchema)
