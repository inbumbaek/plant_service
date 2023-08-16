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