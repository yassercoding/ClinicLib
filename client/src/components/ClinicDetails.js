import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { useParams, useNavigate, Link } from "react-router-dom";

function ClinicDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [clinic, setClinic] = useState(null);
  useEffect(() => {
    axios
      .get(`/api/clinics/${id}`)
      .then((res) => setClinic(res.data))
      .catch((e) => console.log(e));
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`/api/clinics/${id}`)
      .then((res) => navigate("/"))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h2>{clinic?.first_name1}</h2>
      <h3>{clinic?.last_name1}</h3>
      <Link to={`/clinics/${id}/update`}>Update</Link>
      <button onClick={handleDelete}>Delete Clinic</button>
      
    </div>
  );
}

export default ClinicDetails;
