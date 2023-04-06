import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import { NavLink } from 'react-router-dom';
function Header({ isLoggedin, setIsLoggedin }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get('/auth/loggedin-user')
      .then(res => {
        setUser(res.data);
        setIsLoggedin(true);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }, [isLoggedin]);
  const handleLogout = () => {
    axios.post('/auth/logout', {}).then(res => {
      console.log('Logged out');
      window.location.reload();
    });
  };
  return (
    
        <>
          {user ? (
            <div className="header-user">
              <p>Hello: {user.username}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="header-user">
              <NavLink className="nav-link" to={'/login'}>
                Login
              </NavLink>
              <span> | </span>
              <NavLink className="nav-link" to={'/register'}>
                Register
              </NavLink>
            </div>
          )}
        </>
      
  );
}

export default Header;
