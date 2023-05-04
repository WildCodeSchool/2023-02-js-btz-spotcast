import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import SearchBar from './searchbar/SearchBar';

const NavBar = ({ setShow, show, currentUserPicture, currentUserName, allSpots, onLoadAllSpots }) => {
  const handleShow = () => setShow(!show);

  return (
    <div className="navbar">
      <SearchBar 
        allSpots={allSpots}
        onLoadAllSpots={onLoadAllSpots}
      />
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="login">
        <div className="login-align">
          <div className="user-name">{currentUserName}</div>
          <div className="user-img">
            <img onClick={handleShow} src={currentUserPicture} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
