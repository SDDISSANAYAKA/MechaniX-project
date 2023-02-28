import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../helper/context";


 const api = axios.create({
   baseURL:"http://localhost:5001/"
 })


export const Login = (props) => { 
  const navigate = useNavigate();
  const [veh_regNo, setveh_regNo] = useState("");
  const [password, setpassword] = useState("");
  const [newVehicle, setNewVehicle] = useState([]);
  const {user, setUser} = useContext(UserContext);


  console.log(veh_regNo);
  console.log(password);
  
  
  // const handleform = (e) => {
  //   e.preventDefault();
  //   if (veh_regNo && password) {
  //     const EnterVehicle = { veh_regNo, password };
  //     setNewVehicle([...newVehicle, EnterVehicle]);
  //     setNewVehicle("");
  //     setpassword("");
  //   } else {
  //     alert("Please Enter the Vechicle Information");
  //   }

  const login = (e)=>{
    e.preventDefault();
    const userObject = {
        vehNum: veh_regNo,
        password: password
    }
    api.post("/login", userObject).then((res)=>{
        if(res.data != ""){
          console.log(res.data.user.Usertype);
          if(res.data.user.Usertype=="User"){
            navigate("/dashboard")
            setUser(res.data)
          }else if(res.data.user.Usertype=="admin"){
            navigate("/AdminDash")
            setUser(res.data)
          }else if(res.data.user.Usertype=="Mechanic"){
            navigate("/MechanicDash")
            setUser(res.data)
          }else{
            console.log("Login faild", res.data);
          }
        }
    }).catch((e)=>{
        console.log(e);
    })
}

  return (
    <section className="hero-section">
      <div className="login-container">
      <div className="login-title"> Login </div>
        <form action="" onSubmit={ login } className="log-form" method="POST">
          <div className="inputbox">
            <label htmlFor="veh_regNo" className="label-log">
              Vehicle Number:
            </label>
            <input
              type="String"
              name="Vehicle"
              id="veh_regNo"
              placeholder="Abc-123"
              autoComplete="off"
              value={veh_regNo}
              onChange={(e) => setveh_regNo(e.target.value)}
              required
            />
          </div>
          <div className="inputbox">
            <label htmlFor="password" className="label-log">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="login-button">
            <button type="submit" className="login-btn">
              <span>Login</span>
            </button>
          </div>
          <div className="navlink">
            <span>
              Don't have an Account.
              <NavLink to="/register" className="reg-link">
                Register here.
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </section>
  );}


export default Login;
