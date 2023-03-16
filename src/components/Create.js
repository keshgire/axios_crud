import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://6412f791b1ea7443031e524a.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
       navigate('/')
      });
  };

  return (
    <div className="row ">
      <div className="col-4 ">
        <h1>Create Data:</h1>
        <div>
            <Link to='/'>
            <button>Read data</button>
            </Link>
        </div>
        <form className="mt-20" onSubmit={submitHandler}>
          <div className="mb-3 ">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="age" className="form-label">
              Age
            </label>
            <input
              type="age"
              className="form-control"
              placeholder="enter age"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {name}
        <br />
        {age}
        <br />
        {email}
      </div>
    </div>
  );
}

export default Create;
