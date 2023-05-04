// Importing environment variables
require('dotenv').config();
// Importing cors
var cors = require('cors')
// Importing Express
const express = require('express');
// Creating a variable app that use express functions
const app = express();
// Setting up App port with an environment variables
const PORT = process.env.APP_PORT || 5002;

//--------CREATING ALL THE ROUTES-----------

app.use(cors()) // Allow this API to be requested from multiple adresses
app.use(express.json()) // Parse & format the data of all express routes 
// Possible d'utiliser un parser par Router -- exemple : userRouter.use(express.json())

//Créer le router pour les spots
const spotRouter = express.Router(); 
app.use('/spots', spotRouter);

// Importing all the functions to get 'surf spots'
const spots = require('./spots')

// Creating all routes to get 'surf spots'
spotRouter.get("/", spots.selectAllSpots); // To get all spots
spotRouter.get("/:spotId", spots.selectSpotById); // To select a spot with its 'id'
spotRouter.get("/spot/:spotName", spots.selectSpotByName); // To select a spot with its name


// Setting up the listening port of the server
app.listen(PORT, (err) =>{
    if(err){
        console.log('something wrong happened')
    }else{
        console.log(`server is listening on port ${PORT}`);
    }
})