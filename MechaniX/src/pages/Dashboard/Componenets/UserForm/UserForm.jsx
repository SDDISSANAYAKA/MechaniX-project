import React, { useState } from "react";
import "./userform.css";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5001/",
});

function SimpleForm(props) {
  const [Reg, setReg] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Reg: ${name}\nEmail: ${email}`);

    const FormObject = {
      VehicleNo: Reg,
      name: name,
      phone: contact,
      ProblemStatement: problem,
      Date: date,
    };

    api.post("/form", FormObject).then((res) => {
      console.log(res.data);
      props.onClickClose();
    });
  };

  return (
    <div
      className="form-wrapper"
      onClick={(e) => {
        if (e.target.className == "form-wrapper") {
          props.onClickClose();
        }
      }}
    >
      <form className="SimpleForm" onSubmit={handleSubmit}>
        <label>
          Vehicle Registration Number
          <input
            type="text"
            value={Reg}
            onChange={(e) => setReg(e.target.value)}
          />
        </label>
        <label>
          Owner Name:
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Owner Contact Number:
          <input
            type="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </label>
        <label>
          Type of the Problem:
          <input
            type="problem"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />
        </label>
        <label>
          Appointment Date :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SimpleForm;
