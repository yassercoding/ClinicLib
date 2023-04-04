import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useNavigate } from "react-router-dom";

function NewClinic() {
  const navigate = useNavigate();
  const [first_name1, setfirst_name1] = useState("");
  const [last_name1, setlast_name1] = useState("");
  const [first_name2, setfirst_name2] = useState("");
  const [last_name2, setlast_name2] = useState("");
  const [photo1, setphoto1] = useState("");
  const [photo2, setphoto2] = useState("");
  const [image1, setimage1] = useState("");
  const [address, setaddress] = useState("");
  const [telephonnumber, settelephonnumer] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/api/clinics`, {
        first_name1,
        last_name1,
        first_name2,
        last_name2,
        

      })
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>Add a new clinic</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name1">first_name1:</label>
          <input
            type="text"
            value={first_name1}
            onChange={(e) => setfirst_name1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last_name1">last_name1:</label>
          <input
            type="text"
            value={last_name1}
            onChange={(e) => setlast_name1(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="first_name2">first_name2:</label>
          <input
            type="text"
            value={first_name2}
            onChange={(e) => setfirst_name2(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="last_name2">last_name2:</label>
          <input
            type="text"
            value={last_name2}
            onChange={(e) => setlast_name2(e.target.value)}
          />
        </div>
        <button>Add Clinic</button>
      </form>
    </div>
  );
}

export default NewClinic;