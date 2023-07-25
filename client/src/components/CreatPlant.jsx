import "./Style.css";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreatePlant = () => {
  const [name, setName] = useState("");
  const [lighting, setLighting] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/plant", {
        name,
        lighting,
        description,
        price,
        sellerName,
        sellerEmail,
      })
      .then((response) => {
        navigate("/dashboard");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };