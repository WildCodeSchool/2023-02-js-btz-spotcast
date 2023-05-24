const database = require('./databaseConfig');

//Function to get all spots
const selectAllSpots = (req, res) => {
  database
    .query('SELECT * FROM spots')
    .then(([spots]) => {
      res.json(spots);
    })
    .catch((err) => {
      console.log(err);
      res.status(404).send('Data not found');
    });
};

//Function to get a single spot by 'id'
const selectSpotById = (req, res) => {
  //getting the req params
  const spotId = parseInt(req.params.spotId);

  database
    .query('SELECT * FROM spots WHERE id=?', [spotId])
    .then(([spots]) => {
      if (spots[0] != null) {
        res.json(spots[0]);
      } else {
        res.status(404).send('Data not found');
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send('Error retrieving data from database');
    });
};

//Function to get a single spot by 'name'
const selectSpotByName = (req, res) => {
  //getting the req params
  const spotName = req.params.spotName;

  database
    .query('SELECT * FROM spots WHERE name LIKE "%"?"%"', [spotName])
    .then(([spots]) => {
      if (spots != null) {
        res.json(spots);
      } else {
        res.status(404).send('Data not found');
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send('Error retrieving data from database');
    });
};

module.exports = {
  selectAllSpots,
  selectSpotById,
  selectSpotByName,
};
