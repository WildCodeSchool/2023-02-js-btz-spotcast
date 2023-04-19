import { useState } from 'react';
import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import RateButton from '../../utilities/RateButton';
import SpotDataBase from '../../utilities/SpotDataBase';


const NavBar = () => {
  const [rating, setRating] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [currentSpots, setCurrentSpots] = useState("Your selected spot")

  let spots = SpotDataBase.filter((spot) =>
      spot.name.toLowerCase().match(searchInput.toLowerCase())
  );

  const onSelectSpot = (spot) => {
    setCurrentSpots(spot.name);
    setSearchInput('');
  }

  const onChange = (e) => {
    setSearchInput(e.target.value);
    setCurrentSpots('Your selected spot');
  }

  console.log(currentSpots)

  return (
    <div className="navbar">
      <div className="searchbar">
          <input
            className="search-input"
            type="text"
            placeholder="Select your spot here!"
            value={searchInput}
            onChange={onChange}
          />
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
          <RateButton rating={rating} onRating={(rate) => setRating(rate)} />
          <div className="selected-spot">
            {currentSpots}
          </div>
        </div>
        <div className="webcam-link">Access to the webcam</div>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="login">
        <div className="login-align">
          <div className="user-name">User Name</div>
          <div className="user-img"></div>
        </div>
      </div>
    </div>
  );
};


export default NavBar;
