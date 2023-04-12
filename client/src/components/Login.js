import { useState } from 'react';
import axios from '../axiosinstance';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
<Container>


        <br/>
        <div className="col-sm-12 green-top"><h1 className='text-center my-3'>Log in to your ClinicLib Account </h1></div>
        <br/>
   {/* <form onSubmit={handleSubmit}>
      <label htmlFor="">Email:</label>
      <input type="email" name="email" value={user.email} onChange={handleChange} />
      <label htmlFor="">Password:</label>
      <input type="text" name="password" value={user.password} onChange={handleChange} />
      <button>Login</button>
    </form>  */}
    
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={user.email} onChange={handleChange} />

        <Form.Text className="text-muted">
          ClinicLib will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} />
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>

    <br/>
    <div className="col-sm-12 green-top"><h1 className='text-center my-1'>ClinicLib</h1></div>
    <br/>
    </Container>
  );
}

export default Login;
