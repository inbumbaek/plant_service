import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const DetailPlant = (props) => {
  const [plant, setPlant] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
