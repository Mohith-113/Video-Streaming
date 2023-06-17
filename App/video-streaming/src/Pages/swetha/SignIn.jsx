import "./Login.css";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [register, setregister] = useState({ name: '', username: '', email: '', password: '' });
  const changeHandler = (e) => {
      setregister({ ...register, [e.target.name]: e.target.value });
  }
//   const submitHandler = (e) => {
//       e.preventDefault();
//       axios.post(`http://localhost:5000/api/auth/register`, register).then(res => { alert(res.data); navigate('/login') }).catch(err => alert(err.response.data));
//   }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5000/api/auth/register`, register)
      .then(res => {
        if (res.data) {
          alert(res.data);
          navigate('/login');
        } else {
          alert('Registration successful.'); // Or handle the response without accessing `data`
          navigate('/login');
        }
      })
      .catch(err => {
        if (err.response && err.response.data) {
          alert(err.response.data);
        } else {
          alert('An error occurred during registration.');
        }
      });
  };
  return (
    <div className="login">
      
      <div className="container">
      <div className='register' >
            <div className="loginadmin"><Link to='/adminlogin' >Login as Admin</Link></div>
            <h2 className="regishead">Sign-up</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Name: <br />
                    <input type="text" name='name' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Username: <br />
                    <input type="text" name='username' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Email: <br />
                    <input type="text" name='email' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Password: <br />
                    <input type="password" name='password' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <input className='loginButton' type="submit" value="Register" style={{margin:'5px 0 0 0'}}/>
            </form>
            <div className="already">Already have an account? <Link to='/login'>Sign-In</Link></div>
        </div>
      </div>
    </div>
  );
}
