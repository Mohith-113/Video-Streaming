import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom'
import { Nav, NavLink } from 'react-bootstrap'

export default function Login() {
  return (
    <div className="login">
      
      <div className="container">
        <form>
          <h1>Log In</h1>
          <input type="email" placeholder="Email or phone number" /><br/>
          <input type="password" placeholder="Password" />
          <br/>
          <button className="loginButton">Login</button>
          <Nav>
          <p>Don't have an account<NavLink eventKey="8" as={Link} to="/SignUp">Sign Up Now</NavLink></p>
          </Nav>
          <br/>
          
          
        </form>
      </div>
    </div>
  );
}