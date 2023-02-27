const mongoose = require("mongoose");

// Define a schema
const Schema = mongoose.Schema;

const UserModelSchema = new Schema({

    VehicleNo: String,
    name: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    confirmedpassword: String,
    Usertype: String
});

module.exports = mongoose.model("User", UserModelSchema)

