import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailPlant = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/plant/" + id)
      .then((res) => {
        console.log(res.data);
        setPlant(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
        console.log(err);
    })
}