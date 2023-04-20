import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import SearchBar from './searchbar/SearchBar';




const NavBar = () => {
  
  return (
    <div className="navbar"> 
      <SearchBar/>
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
