import { useState } from 'react';
import logo from '../../../assets/logo-header.svg';
import './NavBar.css';
import SearchBar from './searchbar/SearchBar';
import Login from '../login/Login';
import Register from '../login/Register';
import Modal from 'react-bootstrap/Modal';

const NavBar = () => {
  const [currentForm, setCurrentForm] = useState('login');
  const [currentUserPicture, setCurrentUserPicture] = useState(
    'https://cdn.imgbin.com/5/6/5/imgbin-computer-icons-avatar-user-profile-photographer-yTHY2GAmFUKBhvVv8ikQwTMaH.jpg'
  );
  const [currentUserName, setCurrentUserName] = useState('Username');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  return (
    <div className="navbar">
      <SearchBar />
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="login">
        <div className="login-align">
          <div className="user-name">{currentUserName}</div>
          <div className="user-img">
            <img onClick={handleShow} src={currentUserPicture} />
          </div>
          <Modal
            className="modal-form modal-dialog-centered modal-dialog-scrollable"
            show={show}
            onHide={handleShow}
            keyboard={false}>
            {currentForm === 'login' ? (
              <Login
                setCurrentUserName={setCurrentUserName}
                setCurrentUserPicture={setCurrentUserPicture}
                onFormSwitch={toggleForm}
              />
            ) : (
              <Register onFormSwitch={toggleForm} />
            )}
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
