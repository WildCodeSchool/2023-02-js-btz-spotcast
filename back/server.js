// Importing environment variables
require('dotenv').config();

// Importing Express
const express = require('express');
// Creating a variable app that use express functions
const app = express();
// Setting up App port with an environment variables
const PORT = process.env.APP_PORT || 5002;

//--------CREATING ALL THE ROUTES-----------

app.use(express.json()); // Parse & format the data of all express routes
// Possible d'utiliser un parser par Router -- exemple : userRouter.use(express.json())

//Créer le router pour les spots
const spotRouter = express.Router();
app.use('/spots', spotRouter);
// Importing all the functions to get 'surf spots'
const spots = require('./spots');
// To get all spots
spotRouter.get('', spots.selectAllSpots);
// To select a spot with its 'id'
spotRouter.get('/:spotId', spots.selectSpotById);
// To select a spot with its name
spotRouter.get('/spot/:spotName', spots.selectSpotByName);

//Create router for the tides
const tidesRouter = express.Router();
app.use('/tides', tidesRouter);
// Importing all the functions to get 'Tide from surf spots'
const tides = require('./tides');
// Creating all routes to get 'Tides'
tidesRouter.get('', tides.selectAllTides);

//Créer le router pour les users
const userRouter = express.Router();
app.use('/users', userRouter);
//Importing all the functions to get 'users'
const users = require('./users');
// Creating the route for our login
userRouter.post('/login', users.loginUser);

// Setting up the listening port of the server
app.listen(PORT, (err) => {
  if (err) {
    console.log('something wrong happened');
  } else {
    console.log(`server is listening on port ${PORT}`);
  }
});
