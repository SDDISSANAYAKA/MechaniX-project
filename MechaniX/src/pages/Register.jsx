import React, { useState } from "react";

function Register() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    confirmedpassword: "",
    VehicleNo: "",
    Vehicletype: "",
    VehicleMade: "",
    VehicleModel: "",
    Madeyear: "",
    fueltype: "",
  });
  // manage state
  const handleonchange = (e) => {
    const Target = e.currentTarget;
    const name = Target.name;
    const value = Target.value;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  //  conect with firebase
  const handlesubmit = (e) => {
    e.preventDefault();
    // const { firstName, lastName, phone, email, address, message } = state;
    console.log(state);

    if (1) {
      const res = fetch(
        "http://localhost:5001/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        }
      );

      if (res) {
        setState({
          name: "",
          email: "",
          password: "",
          phone: "",
          address: "",
          confirmedpassword: "",
          VehicleNo: "",
          Vehicletype: "",
          VehicleMade: "",
          VehicleModel: "",
          Madeyear: "",
          fueltype: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <section className="hero-section">
      <div className="register-container">
        <div className="title">Registration</div>
        <form action="#" onSubmit={handlesubmit}>
          <div className="user__details">
            <div className="input__box">
              <span className="details">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="E.g: Saman Kumara"
                required=""
                onChange={handleonchange}
                value={state.name}
              />
            </div>
            <div className="input__box">
              <span className="details">Email</span>
              <input
                type="email"
                name="email"
                placeholder="samankumara@gmail.com"
                required=""
                onChange={handleonchange}
                value={state.email}
              />
            </div>
            <div className="input__box">
              <span className="details">Phone Number</span>
              <input
                type="tel"
                name="phone"
                required=""
                onChange={handleonchange}
                value={state.phone}
              />
            </div>
            <div className="input__box">
              <span className="details">Address</span>
              <input
                type="tel"
                name="address"
                required=""
                onChange={handleonchange}
                value={state.address}
              />
            </div>

            <div className="input__box">
              <span className="details">Password</span>
              <input
                type="password"
                name="password"
                placeholder="********"
                required=""
                onChange={handleonchange}
                value={state.password}
              />
            </div>
            <div className="input__box">
              <span className="details">Confirm Password</span>
              <input
                type="password"
                name="confirmedpassword"
                placeholder="********"
                required=""
                onChange={handleonchange}
                value={state.confirmedpassword}
              />
            </div>
            <div className="input__box">
              <span className="details"> Vehicle Number.</span>
              <input
                type="text"
                name="VehicleNo"
                placeholder="CDA-124"
                required=""
                onChange={handleonchange}
                value={state.VehicleNo}
              />
            </div>
            <div className="input__box">
              <span className="details"> Vehicle Type </span>
              <input
                type="text"
                name="Vehicletype"
                placeholder="Car/Bike/Van"
                required=""
                onChange={handleonchange}
                value={state.Vehicletype}
              />
            </div>
            <div className="input__box">
              <span className="details"> Vehicle Model </span>
              <input
                type="text"
                name="VehicleModel"
                placeholder="Civic Type R"
                required=""
                onChange={handleonchange}
                value={state.VehicleModel}
              />
            </div>
            <div className="input__box">
              <span className="details"> Made Year </span>
              <input
                type="text"
                name="Madeyear"
                placeholder="2023"
                required=""
                onChange={handleonchange}
                value={state.Madeyear}
              />
            </div>
          </div>
          <div className="fueltype__details">
            <span className="fueltype__title">Select the fuel type</span>
            <div className="category">
            <div className="fueltype_radio">
            <input
              type="radio"
              name="fueltype"
              id="dot-1"
              onChange={handleonchange}
              value="Petrol"
              checked={state.fueltype === "Petrol"}
            />
              <label htmlFor="dot-1">
                <span style={{ fontSize: "24px" }}>Petrol</span>
              </label>
              </div>
              <div className="fueltype_radio">
              <input
              type="radio"
              name="fueltype"
              id="dot-2"
              onChange={handleonchange}
              value="Diesel"
              checked={state.fueltype === "Diesel"}
            />
              <label htmlFor="dot-2">
                <span style={{ fontSize: "24px" }}>Disel</span>
              </label>
              </div>
              <div className="fueltype_radio">
              <input
              type="radio"
              name="fueltype"
              id="dot-3"
              onChange={handleonchange}
              value="Electrical"
              checked={state.fueltype === "Electrical"}
            />
              <label htmlFor="dot-3">
                <span style={{ fontSize: "24px" }}>Electrical</span>
              </label>
              </div>
            </div>
          </div>
          <button type="submit" className="reg-btn">
            <span>Register</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Register;
