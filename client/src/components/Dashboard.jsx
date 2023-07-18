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
    <div className="dashboard-container">
      <div className="dashboard">
        {/* --------------------NAV BAR--------------------------------------- */}

        <div className="navBar-welcome">
          <div className="img-welcome">
            <div>
              <img
                src="../images/RealPlant1.jpg"
                alt="Plant Icon"
                className="DashboardImage"
              />
            </div>
            <div>
              <h1>Sell your Plants here!</h1>
              <p>Plant gonna make people Happy.</p>
              <Link to="/plant/new" className="button-62">
                Sell your Plant
              </Link>
            </div>
          </div>
        </div>