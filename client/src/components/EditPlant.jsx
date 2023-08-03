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