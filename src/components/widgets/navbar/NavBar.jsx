import { useEffect, useState } from 'react';
import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import RateButton from '../../utilities/RateButton';
import SpotDataBase from '../../utilities/SpotDataBase';


const NavBar = () => {
  // -----------------------------------------Fav icon useState
  const [rating, setRating] = useState(false);

  //------------------------ -----------------Search input useState
  const [searchInput, setSearchInput] = useState("");

  // -----------------------------------------Value in String of the Current spots useState
  const [currentSpots, setCurrentSpots] = useState("Your selected spot")


  // -----------------------------------------Selected Spot by the user and store in the new tab
  const [selectedSpots, setSelectedSpots] = useState([""])

  //------------------------------------------Create a new array with filtered database
  let spots = SpotDataBase.filter((spot) =>
      spot.name.toLowerCase().match(searchInput.toLowerCase())
  );

  //--------------------------------------------Create a variable for the clicked selected spot
  const onSelectSpot = (spot) => {
    setCurrentSpots(spot.name);
    setSearchInput('');
  }

  // -------------------------------------------Create a variable to implement the data on the search bar
  const onChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentSpots('Your selected spot');
  }

  // -------------------------------------------Filter the selected object to match it with the data base and rendered in a new tab as an object
  useEffect(() => {
    setSelectedSpots(SpotDataBase.filter((selectSpot) => 
    selectSpot.name == currentSpots))
  },[currentSpots])
  
  return (
    <div className="navbar">
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
                  <p  onClick={() => onSelectSpot(spot)}>{spot.name}</p>
                </li>
              ))}
            </ul>
          )}

        <div className="current-location">
          {/* Implement a clickable favorite icon for your surf spot */}

          <RateButton 
            rating={rating} 
            onRating={(rate) => setRating(rate)}
          />
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

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      
      <div className="login">
        <div className="login-align">
          <div className="user-name">Rodrigo La Ride</div>
          <div className="user-img"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwELv6YPxL_SAptUzg_uxQFI7ambMcaZx1_u-wL0m2jXOVzQA_qtKYziAI6OkPKj086-k&usqp=CAU'/></div>
        </div>
      </div>
    </div>
  );
};


export default NavBar;
