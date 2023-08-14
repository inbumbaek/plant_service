import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const changeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]:e.target.value})
    }
