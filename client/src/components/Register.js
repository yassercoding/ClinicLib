import { useState } from 'react';
import axios from '../axiosinstance';
import { useNavigate } from 'react-router-dom';
function Register({ setIsLoggedin }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/auth/register', user)
      .then(res => {
        console.log(res.data);
        setIsLoggedin(true);
        navigate('/');
      })
      .catch(err => {
        setError(err.response.data.errors);
      });
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="">Username:</label>
      {error.username && <p className="text-danger">{error.username.message}</p>}
      <input type="text" name="username" value={user.username} onChange={handleChange} />
      <label htmlFor="">Email:</label>
      {error.email && <p className="text-danger">{error.email.message}</p>}
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <label htmlFor="">Password:</label>
      {error.password && <p className="text-danger">{error.password.message}</p>}
      <input type="password" name="password" value={user.password} onChange={handleChange} />

      <label htmlFor="">Confirm Password:</label>
      {error.confirmPassword && <p className="text-danger">{error.confirmPassword.message}</p>}
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange}
      />
      <button>Register</button>
    </form>
  );
}

export default Register;
