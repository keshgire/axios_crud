import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Edit() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setAge(localStorage.getItem("age"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const updateData = (e) => {
    e.preventDefault();
    axios
      .put(`https://6412f791b1ea7443031e524a.mockapi.io/crud/${id}`, {
        e_name: name,
        e_age: age,
        e_email: email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="row ">
      <div className="col-4 ">
        <h1>Update Data:</h1>
        <div>
          <Link to="/">
            <button>Read data</button>
          </Link>
        </div>
        <form onSubmit={updateData}>
          <div className="mb-3 ">
            <label for="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter name"
              value={name}
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
              value={age}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Update Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
