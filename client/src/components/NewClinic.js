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
      .then((res) => navigate("/clinics"))
      .catch((e) => console.log(e));
  };
  return (
    <div className="container my-5 ">
    <div className="row">
      <div className="col-sm-12 green-top">ADD NEW CLINIC</div>
    </div>
    
    <form onSubmit={handleSubmit}>

    <div className="row">
    <div className="col-12 col-md-6 col-lg-6 form-color">
    <div className="mb-3 p-5">
      
        <label htmlFor="name"><h5 className="mb-3">Name</h5></label><br/>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      <br/>

      
        <label htmlFor="specialty"><h5 className="my-3">Medical specialty</h5></label><br/>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        />
      <br/>

      
        <label htmlFor="address"><h5 className="my-3">Address</h5></label><br/>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br/>
        <label htmlFor="url"><h5 className="my-3">www</h5></label><br/>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
      
    </div>
    </div>
    <div className="col-12 col-md-6 col-lg-6 form-color">
    <div className="mb-3 p-5">
      
        <label htmlFor="telNumber"><h5 className="mb-3">Tel number</h5></label><br/>
        <input
          type="text"
          value={telNumber}
          onChange={(e) => setTelNumber(e.target.value)}
        />
      <br/>
      
        <label htmlFor="description"><h5 className="my-3">Description</h5></label><br/>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      <br/>
      
        <label htmlFor="image"><h5 className="my-3">Image</h5></label><br/>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />


      </div>
    

      
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12 green-top">

      <button >Add Clinic</button>
      </div>
      
    </div>
    </form>
  </div>
);
}

export default NewClinic;
