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
        <h1>What Plants are you selling?</h1>
        <div className="navBar1">
          <Link className="button-62" to="/dashboard">
            Home
          </Link>
          <button className="button-62" onClick={logout}>Logout</button>
        </div>
      </div>
      <hr />{" "}
      <form onSubmit={handleSubmit}>
        {/* <-------------PLANT NAME------------> */}
        <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Plant Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {errors.name ? (
              <p className="error-message">{errors.name.message}</p>
            ) : null}
          </div>