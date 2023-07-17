import "../App.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const Dashboard = () => {
  const [allPlants, setAllPlants] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/plant")
      .then((response) => {
        setAllPlants(response.data);
      })
      .catch((err) => {});
  }, []);

  const handleDelete = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/plant/${idFromBelow}`)
      .then((response) => {
        const updatedPlants = allPlants.filter(
          (plant) => plant._id !== idFromBelow
        );
        setAllPlants(updatedPlants);
      })
      .catch((err) => {});
  };