import {useEffect, useState} from 'react';
import { useContext } from 'react';
import { selectedSpotsContext } from '../../../../pages/Dashboard';
import SpotDataBase from '../../../utilities/SpotDataBase';
import starfilled from '../../../../assets/images/star-filled.svg';
import staroutline from '../../../../assets/images/star-outline.svg';
import '../NavBar.css';

const SearchBar = () => {

  
    // -----------------------------------------Fav icon useState
  const [isFavorite, setIsFavorite] = useState(false);
    //------------------------ -----------------Search input useState
  const [searchInput, setSearchInput] = useState("");

  // -----------------------------------------Value in String of the Current spots useState
  const [currentSpots, setCurrentSpots] = useState("Biarritz - La Côte des Basques")

  // -----------------------------------------Selected Spot by the user and store in the new tab
  const [selectedSpots, setSelectedSpots] = useContext(selectedSpotsContext)

  const[searchActive, setSearchActive] = useState(false)

  //------------------------------------------Create a new array with filtered database
  let spots= SpotDataBase.filter((spot) =>
      spot.name.toLowerCase().match(searchInput.toLowerCase())
  );


  //--------------------------------------------Create a variable for the clicked selected spot
  const onSelectSpot = (spot) => {
    setCurrentSpots(spot.name);
    setSearchInput('');
    setSearchActive(true)
  }

  // -------------------------------------------Create a variable to implement the data on the search bar
  const onChange = (e) => {
    setSearchInput(e.target.value);
    spots = SpotDataBase.filter((spot) =>
      spot.name.toLowerCase().match(searchInput.toLowerCase())
  );
    
  }

  const handleFavorite=()=>{
    setIsFavorite(!isFavorite)
  }

  // -------------------------------------------Filter the selected object to match it with the data base and rendered in a new tab as an object
  useEffect(() => {

    searchActive ?
      setSelectedSpots(SpotDataBase.filter((selectSpot) => 
      selectSpot.name == currentSpots))
    : setSelectedSpots(selectedSpots)
   
  },[currentSpots])

  console.log(selectedSpots[0])
  
  return (
    <div className="searchbar">

        {/* Create the search bar */}

          <input
            className="search-input"
            type="text"
            placeholder="Select your spot here!"
            value={searchInput}
            onChange={onChange}
          />
          
          {/* Create the dropdown suggestion box in a new tab that is generated on the spot as you input in the search bar */}
          
          {searchInput !== '' && (
            <ul className='dropdown-search'>
              {spots.map(spot => (
                <li key={spot.id}>
                  <p  onClick={() =>  onSelectSpot(spot)}>{spot.name}</p>
                </li>
              ))}
            </ul>
          )}

        <div className="current-location">
          {/* Implement a clickable favorite icon for your surf spot */}
          <img onClick={handleFavorite} src={isFavorite ? starfilled : staroutline} />
          <div className="selected-spot">
            {currentSpots}
          </div>
        </div>

        {/* Implement a clickable webcam link for your surf spot if it exists in the data base*/}
       <div className="webcam-link">
        {selectedSpots.length === 0 
          ? "" 
          : selectedSpots[0].webcam === false
            ? "" 
            : <a href={selectedSpots[0].webcam} target='_blank'>Access the webcam</a> }
            {/* The ternary operator here ask if the object selectedSpots is empty or not, 
            then fetch the value of the key webcam and display it if it exists */}
        </div>
       
      </div>
      
  )
}

export default SearchBar