import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EditPlant = (props) => {
  const { id } = useParams();
  const [plantName, setPlantName] = useState("");
  const [plantLighting, setPlantLighting] = useState("");
  const [plantDescription, setPlantDescription] = useState("");
  const [plantPrice, setPlantPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [errors, setErrors] = useState({});
  const [plantNotFound, setPlantNotFound] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/plant/${id}`)
      .then((response) => {
        setPlantName(response.data.name);
        setPlantLighting(response.data.lighting);
        setPlantDescription(response.data.description);
        setPlantPrice(response.data.price);
        setSellerName(response.data.sellerName);
        setSellerEmail(response.data.sellerEmail);
      })
      .catch((err) => {
        setPlantNotFound(`Plant not found using that ID`);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/plant/${id}`, {
        name: plantName,
        lighting: plantLighting,
        description: plantDescription,
        price: plantPrice,
        sellerName: sellerName,
        sellerEmail: sellerEmail,
      })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };

  const logout = () => {
    axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true})
    .then((res) => {
        navigate('/')
    })
    .catch((err) => {
        console.log(err);
    })
}

return (
  <div className="show-details-container">
    <div className="show-details">
      <div className="navBar">
        <h1>{plantName}</h1>
        <div className="navBar1">
          <Link className="button-62" to="/dashboard">
          Home
        </Link>
        <button className="button-62" onClick={logout}>Logout</button>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {plantNotFound ? (
          <p>
            {plantNotFound} <Link to="/plant/sell">Sell a Plant?</Link>
          </p>
        ) : null}
        <div className="bodyBox">
          <div>