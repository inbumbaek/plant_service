import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Register = (props) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({})
    const changeHandler = (e) => {
        // setUser({ ...user, [e.target.name]: e.target.value })
        setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }))

    };
    const submitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/register', user, { withCredentials: true })
          .then((res) => {
              console.log(res);
              navigate('/')
          })
          .catch((err) => {
              console.log(err);
              setErrors(err.response?.data?.errors || {})
          });
  };
  return (
        <div className="register">
            <h1 className="text-center">Register</h1>
            <br />
            <form onSubmit={submitHandler} className="col-4 mx-auto user-form">
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>First Name:</label>
                    <input type="text" onChange={changeHandler} value={user.firstName} name="firstName" className='form-control' />
                </div>