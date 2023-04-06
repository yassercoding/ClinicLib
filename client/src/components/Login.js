import { useState } from 'react';
import axios from '../axiosinstance';
import { useNavigate } from 'react-router-dom';
function Login({ setIsLoggedin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/auth/login', user)
      .then(res => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate('/');
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <label htmlFor="">Password:</label>
      <input type="text" name="password" value={user.password} onChange={handleChange} />
      <button>Login</button>
    </form>
  );
}

export default Login;
