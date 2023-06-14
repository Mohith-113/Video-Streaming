
// import "./Login.css";
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Add() {
  const navigate = useNavigate();
  const [Add, setAdd] = useState({ title: '', posterUrl: '', flexiUrl: '', description: '', videoUrl:'' });
  const changeHandler = (e) => {
      setAdd({ ...Add, [e.target.title]: e.target.value });
  }
  const submitHandler = (e) => {
      e.preventDefault();
      axios.post(`http://localhost:5000/api/movies`, Add).then(res => { alert(res.data); navigate('/') }).catch(err => alert(err.response.data));
  }
  return (
    <div className="login">
      
      <div className="container">
      <div className='register' >
            <h2 className="regishead">Add Movie</h2>
            <form className="regisform" onSubmit={submitHandler}>
                <label htmlFor="name">Title: <br />
                    <input type="text" name='title' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Poster URL: <br />
                    <input type="url" name='posterUrl' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Flexi URL: <br />
                    <input type="url" name='flexiUrl' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Description: <br />
                    <input type="text" name='description' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <label htmlFor="name">Video Url: <br />
                    <input type="url" name='videoUrl' onChange={changeHandler} autoComplete='off' required style={{width:'250px'}} />
                </label>
                <input className='loginButton' type="submit" value="Add" style={{margin:'5px 0 0 0'}}/>
            </form>
        </div>
      </div>
    </div>
  );
}
