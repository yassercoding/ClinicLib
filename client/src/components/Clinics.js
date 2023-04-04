import { useState, useEffect } from "react";
import axios from "../axiosinstance";
import { Link } from "react-router-dom";
function Clinics() {
  const [clinics, setClinics] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/clinics`)
      .then((res) => setClinics(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {clinics?.map((clinic) => (
        <p key={clinic.id}>
          <Link to={`/clinics/${clinic._id}`}>{clinic.first_name1}</Link>
        </p>
      ))}
    </div>
  );
}

export default Clinics;