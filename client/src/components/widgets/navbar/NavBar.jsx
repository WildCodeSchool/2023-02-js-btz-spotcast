import { useEffect, useState } from 'react'
import logo from "../../../assets/logo-header.svg";
import logoDark from "../../../assets/logo-header-dark.svg";
import "./NavBar.css";
import './ResponsiveNavBar.css';
import SearchBar from "./searchbar/SearchBar";

const NavBar = ({
  setShow,
  show,
  currentUserPicture,
  currentUserName,
  showDropMenu,
  setShowDropMenu,
  onLoadAllSpots, 
  allSpots,
}) => {

  const handleShow = () => setShow(!show);

  const ShowDropdownMenu = () => {setShowDropMenu(!showDropMenu)};

    // UseState qui détecte la taille de l'écran
    const [widthSize, setWidthSize] = useState(window.innerWidth)

    useEffect(()=> {
      const widthSizeDetector = () => {
        setWidthSize(window.innerWidth)
      }
      
      window.addEventListener('resize', widthSizeDetector)
  },[])

  return (
    <div className="navbar">
      <SearchBar
        onLoadAllSpots={onLoadAllSpots}
        allSpots={allSpots}
      />

      <div className="logo-and-burger">
        <div className="logo">
          <img src={widthSize < 786 ? logoDark : logo} alt="logo" />
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

    </div>
  );
};

export default NavBar;
