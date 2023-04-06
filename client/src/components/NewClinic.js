import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useNavigate } from "react-router-dom";

function NewClinic() {
  const navigate = useNavigate();
  const [name,setName] =useState('')
  const [specialty,setSpecialty] =useState('')
  const [address,setAddress] =useState('')
  const [telNumber,setTelNumber] =useState('')
  const [description,setDescription] = useState('')
  const [image,setImage] = useState('')
  const [url,setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/clinics`, {
       name,
       specialty,
       address,
       telNumber,
       description,
       image,
       url
      })
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Add a new clinic</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="specialty">specialty:</label>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="address">address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="telNumber">telNumber:</label>
          <input
            type="text"
            value={telNumber}
            onChange={(e) => setTelNumber(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="image">image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          
        </div>
        <div>
          <label htmlFor="url">url:</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          </div>

        <button>Add Clinic</button>
      </form>
    </div>
  );
}

export default NewClinic;
