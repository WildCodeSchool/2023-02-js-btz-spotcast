import { useState } from "react";
import logo from "../../../assets/logo-header.svg";
import "./NavBar.css";
import SearchBar from "./searchbar/SearchBar";

const NavBar = ({
  setShow,
  show,
  currentUserPicture,
  currentUserName,
  showDropMenu,
  setShowDropMenu,
}) => {
  const handleShow = () => setShow(!show);

  const ShowDropdownMenu = () => {setShowDropMenu(!showDropMenu)};

  return (
    <div className="navbar">
      <SearchBar />
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="login">
        <div className="login-align" onClick={handleShow}>
          <div className="user-name">{currentUserName}</div>
          <div className="user-img">
            <img src={currentUserPicture} />
          </div>
        </div>
        <div className="burger">
          <label htmlFor="check">
            <input onChange={ShowDropdownMenu} type="checkbox" id="check" checked={showDropMenu}/>
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
