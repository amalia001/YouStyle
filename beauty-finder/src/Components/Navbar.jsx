import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import arrowIcon from '../images/down-arrow.png';
import logo_y from '../images/logo_y.png';
import profileIcon from '../images/profile.png';
import './Navbar.css';
import SignUp from './SignUp.js';
import { Button } from 'semantic-ui-react';



const Navbar = ({ isLogged, onHandleLogin }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setShowSignUp(true);
  };

  const closeSignUpPopup = () => {
    setShowSignUp(false);
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-button">
        <img src={logo_y} className="navbar-logo" alt="logo" />
        <span className="logo-text">YouStyle</span>
      </Link>
      <div className="navbar-links">
        <Button onClick={onHandleLogin}>DEBUG: Log {isLogged ? 'Out' : 'In'}</Button>
        {isLogged ?
          <Link to="/my-account">
            <Icon name='calendar alternate outline' size='large' />
            My appointments
            </Link> :
          <Link to="/register">Register your salon</Link>
        }
        <Link to="/catalog">Catalog</Link>
      </div>

      <div className="profile-button" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
        <img src={profileIcon} className="profile-icon" alt="profile" style={{ width: '30px', height: '30px' }} />
        {/* <span className="arrow-icon">▼</span> */}
        <img src={arrowIcon} className="arrow-icon" alt="arrow" style={{ width: '20px', height: '20px' }} />
        {showDropdown && (
          <div className="popup">
            <span >Log In</span>
            <span onClick={handleSignUpClick}>Sign Up</span>

          </div>
        )}
      </div>
      {showSignUp && <SignUp onClose={closeSignUpPopup} />}
    </nav>
  );
};

export default Navbar;