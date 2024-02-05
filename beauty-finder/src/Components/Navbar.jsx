import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import arrowIcon from '../images/down-arrow.png';
import logo_y from '../images/logo_y.png';
import profileIcon from '../images/profile-icon-blue.png';
import './Navbar.css';
import SignUp from './SignUp.jsx';
import SignIn from './SignIn.jsx';
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

  const [showSignIn, setShowSignIn] = useState(false);

  const handleSignInClick = () => {
    setShowSignIn(true);
  };

  const closeSignInPopup = () => {
    setShowSignIn(false);
  };


  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-button">
        <img src={logo_y} className="navbar-logo" alt="logo" />
        <span className="logo-text">YouStyle</span>
      </Link>
      <div className="navbar-links">
        <Button onClick={onHandleLogin}>DEBUG: Log {isLogged ? 'Out' : 'In'}</Button>
        <Link to="/salons">Salons</Link>
        <Icon name='calendar alternate outline' size='large' fluid />
        {isLogged ?
          
          <Link to="/my-account">

            My appointments
          </Link> :
          <Link to="/create-business-account">Register your salon</Link>
        }
        <Link to="/catalog">Catalog</Link>
      </div>

      <div className="profile-button" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownToggle}>
        <img src={profileIcon} className="profile-icon" alt="profile" style={{ width: '50px', height: '35px', backgroundColor:'white' }} />
        {/* <span className="arrow-icon">▼</span> */}
        <img src={arrowIcon} className="arrow-icon" alt="arrow" style={{ width: '20px', height: '20px' }} />
        {showDropdown && (
          <div className="popup">
            {isLogged ? (
              <>
                <span>
                  <Icon name='alternate calendar outline' />
                  Appointments</span>
                <span>
                  <Icon name='heart outline' />
                  Favourites</span>
                <span>
                <Icon name='bell outline' />
                  Notifications</span>
                <span>
                <Icon name='setting' />
                  Settings</span>
                <span onClick={onHandleLogin}>
                  <Icon name='sign-out' />
                  Log Out
                </span>
              </>
            ) : (
              <>
                <span onClick={handleSignInClick}>
                  <Icon name='sign-in' />
                  Log In
                </span>
                <span onClick={handleSignUpClick}>
                  <Icon name='signup' />
                  Sign Up
                </span>
              </>
            )}
          </div>
        )}
        
      </div>
      {showSignIn && <SignIn onClose={closeSignInPopup} onSwitchToRegister={() => {
        closeSignInPopup();
        handleSignUpClick();
      }} />}
      {showSignUp && <SignUp onClose={closeSignUpPopup} onSwitchToSignIn={()=>{
        closeSignUpPopup();
        handleSignInClick();
      }
      }/>}

    </nav>
  );
};

export default Navbar;