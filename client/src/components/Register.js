import { useState } from 'react';
import axios from '../axiosinstance';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
<Container>

<br/>
        <div className="col-sm-12 green-top"><h1 className='text-center my-3'>Sign up for a ClinicLib account </h1></div>
        <br/>

      <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="">
        <Form.Label>Username</Form.Label>
        {error.username && <p className="text-danger">{error.username.message}</p>}
        <Form.Control type="text" placeholder="Username" name="username" value={user.username} onChange={handleChange} />

        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {error.email && <p className="text-danger">{error.email.message}</p>}
        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />

        <Form.Text className="text-muted">
          ClinicLib will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        {error.password && <p className="text-danger">{error.password.message}</p>}
        <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm password</Form.Label>
        {error.confirmPassword && <p className="text-danger">{error.confirmPassword.message}</p>}
        <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
        

      </Form.Group>
      
      <Button variant="success" type="submit">
        Register
      </Button>
    </Form>


    <br/>
    <div className="col-sm-12 green-top"><h1 className='text-center my-1'>ClinicLib</h1></div>
    <br/>
    </Container>
  );
}

export default Register;
