import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import SearchBar from './searchbar/SearchBar';

const NavBar = ({ setShow, show, currentUserPicture, currentUserName }) => {
  const handleShow = () => setShow(!show);
  const ShowDropdownMenu = () => {

  }

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
          <label for="check">
            <input onClick={ShowDropdownMenu} type="checkbox" id="check"/>
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
