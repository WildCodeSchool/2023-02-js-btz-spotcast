import { useState } from 'react';
import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import RateButton from './rate/RateButton';

const NavBar = () => {
  const [rating, setRating] = useState(0);

  return (
    <div className="navbar">
      <div className="searchbar">
        <input
          className="search-input"
          type="text"
          placeholder="Select your spot here !"
        />
        <div className="current-location">
          <RateButton rating={rating} onRating={(rate) => setRating(rate)} />
          <div className="selected-spot"> Your selected spot </div>
        </div>
        <div className="webcam-link">Access to the webcam</div>
      </div>

      <img className="logo" src={logo} alt="logo" />

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
