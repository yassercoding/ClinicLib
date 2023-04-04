import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useParams, useNavigate, Link } from "react-router-dom";

function UpdateClinic() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [clinic, setClinic] = useState({ first_name1: "", last_name1: "", first_name2: "", last_name2: "", });
  useEffect(() => {
    axios
      .get(`/api/clinics/${id}`)
      .then((res) => setClinic(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClinic({ ...clinic, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/clinics/${id}`, clinic)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name1">first_name1:</label>
          <input
            type="text"
            name="first_name1"
            value={clinic.first_name1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name1">last_name1:</label>
          <input
            type="text"
            name="last_name1"
            value={clinic.last_name1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="first_name2">first_name2</label>
          <input
            type="text"
            value={clinic.first_name2}
            name="first_name2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="last_name2">last_name2:</label>
          <input
            type="text"
            name="last_name2"
            value={clinic.last_name2}
            onChange={handleChange}
          />
        </div>
        <button>Update Clinic</button>
      </form>
    </div>
  );
}

export default UpdateClinic;