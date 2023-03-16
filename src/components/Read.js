import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    getData()
  }, []);

  function getData(){
    axios
    .get("https://6412f791b1ea7443031e524a.mockapi.io/crud")
    .then((item) => {
     
      setData(item.data);
    });
  }

  function handleDelete(id){
    axios.delete(`https://6412f791b1ea7443031e524a.mockapi.io/crud/${id}`)
    .then(()=>{
        getData()
    })
  }

  const editHandler=(id,name,age,email)=>{
    localStorage.setItem('id',id)
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
    localStorage.setItem("email",email)

    navigate('/edit')
  }

  return (
    <div className="main">
        <div>
            <Link to='/create'>
            <button>Create data</button>
            </Link>
        </div>
      <ul className="ul">
        <li>Sr no</li>
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
        <li>Actions</li>
      </ul>
      {data.map((item, index) => {
        return (
          <>
            <ul className="ul">
              <li>{index + 1}</li>
              <li>{item.e_name}</li>
              <li>{item.e_age}</li>
              <li>{item.e_email}</li>
              <li>
             
                <button onClick={()=>editHandler(item.id,item.e_name,item.e_age,item.e_email)}>Edit</button>
                 <button
                  onClick={()=>{if(window.confirm('Are you sure to delete data?')){handleDelete(item.id)}}}>Delete</button>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
}

export default Read;
