const express = require('express')
var cors = require('cors')
const User = require('./modules/user')
const Vehicle = require('./modules/vehicle')
var bodyParser = require('body-parser')
const app = express()
const port = 5001
app.use(cors({origin: '*'}));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


var mongoose = require('mongoose');
mongoose.set('strictQuery', true)

mongoose.connect('mongodb+srv://MechaniX:mechaniX@workshopmanagment.va66god.mongodb.net/?retryWrites=true&w=majority').then(()=>{
    console.log("Hello");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/login', async(req, res) => {
    let data = req.body;

    const user =  await User.findOne({"VehicleNo":data.vehNum , "password":data.password })
    const vehicle = await Vehicle.findOne({"VehicleNo":data.vehNum })

    console.log(user,vehicle);
    res.send({user:user,vehicle:vehicle})
    // if(req.body.vehNum == "ABC-1234" && req.body.password == "abc1234"){
    //   res.send("user login")
    // }else{
    // res.send("user not login");
    // }
})



app.post('/register', (req, res) => {
  let data = req.body;
  console.log(data);
  User.create({ "Usertype":"User" , "VehicleNo":data.VehicleNo, "email":data.email, "password":data.password, "confirmedpassword":data.confirmedpassword, "name":data.name, "phone":data.phone, "address":data.address })
  Vehicle.create({ "VehicleNo":data.VehicleNo, "Vehicletype":data.Vehicletype, "VehicleModel":data.VehicleModel, "VehicleMade":data.VehicleMade, "Madeyear":data.Madeyear, "fueltype":data.fueltype })




  console.log(data);
  res.send("user registered")


  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})