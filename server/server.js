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

mongoose.connect('mongodb://127.0.0.1:27017/VMS').then(()=>{
    console.log("Hello");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/login', async(req, res) => {
    let data = req.body;

    const user =  await User.findOne({"vehNum":data.vehNum , "password":data.password })

    console.log(user);
    res.send(user)
    // if(req.body.vehNum == "ABC-1234" && req.body.password == "abc1234"){
    //   res.send("user login")
    // }else{
    // res.send("user not login");
    // }
})





app.post('/register', (req, res) => {
  let data = req.body;
  console.log(data);
  User.create({ "VehicleNo":data.VehicleNo, "email":data.email, "password":data.password, "confirmedpassword":data.confirmedpassword, "name":data.name, "phone":data.phone, "address":data.address })
  Vehicle.create({ "VehicleNo":data.VehicleNo, "Vehicletype":data.Vehicletype, "VehicleModel":data.VehicleModel, "VehicleMade":data.VehicleMade, "Madeyear":data.Madeyear, "fueltype":data.fueltype })




  console.log(data);
  res.send("user registered")


  
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})