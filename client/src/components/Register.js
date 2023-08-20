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
                <div>
                    {user.firstName.length < 2 && user.firstName.length > 0 ? (
                        <p className="text-danger">First Name be at least 2 characters</p>
                    ) : null}
                        {errors.firstName ? errors.firstName.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Last Name:</label>
                    <input type="text" onChange={changeHandler} value={user.lastName} name="lastName" className='form-control' />
                </div>
                <div>
                    {user.lastName.length < 2 && user.lastName.length > 0 ? (
                        <p className="text-danger">Last Name be at least 2 characters</p>
                    ) : null}
                        {errors.lastName ? errors.lastName.message : null}
                </div>
                <div className="form-group">
                    <label className='form-label text-dark font-weight-bold'>Email:</label>
                    <input type="email" onChange={changeHandler} value={user.email} name="email" className='form-control' />
                </div>
                <div>
                    {user.email.length < 2 && user.email.length > 0 ? (
                        <p className="text-danger">Email be at least 2 characters</p>
                    ) : null}
                        {errors.email ? errors.email.message : null}
                </div>