const Plant = require("../models/plant.model");

const createNew = (request, response) => {
  Plant.create(request.body)
    .then((newPlant) => {
      response.json({ newPlant });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};