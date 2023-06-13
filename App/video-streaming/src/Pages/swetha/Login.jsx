import "./Login.css";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';
import React, { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [login, setlogin] = useState({ username: '', password: '' });
  const changeHandler = (e) => {
      setlogin({ ...login, [e.target.name]: e.target.value });
  }
  const submitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/api/auth/login', login).then(res => { localStorage.setItem('token', res.data.token); navigate('/') }).catch(err => alert(err.response.data));
  }
  return (
    <div className="login">
      
      <div className="container">
        {/* <form>
          <h1>Log In</h1>
          <input type="" placeholder="UserName" /><br/>
          <input type="password" placeholder="Password" />
          <br/>
          <button className="loginButton" value={Login}>Login</button>
          <Nav>
          <p>Don't have an account<NavLink eventKey="8" as={Link} to="/SignUp">Sign Up Now</NavLink></p>
          </Nav>
          <br/>
          
          
        </form> */}
        <div className="loginadmin"><Link to='/adminlogin' >Login as Admin</Link></div>
            <h2 className="loghead">Sign-In</h2>
            <form onSubmit={submitHandler} className="loginform">
                <label htmlFor="email">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} required autoComplete='off'style={{width:'250px'}} />
                </label>
                <label htmlFor="password">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} required style={{width:'250px'}}/>
                </label>
                <button className="loginButton" value={Login}>Login</button>
            </form>
            <div className="createanact">New coustomer? <Link to='/SignUp'>Sign-up</Link> </div>
      </div>
    </div>
  );
}