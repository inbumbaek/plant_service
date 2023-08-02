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
