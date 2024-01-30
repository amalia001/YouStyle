import React, { useState } from 'react';
import { Form, Input, Icon, Button, Label, Image, Dropdown, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import registerImage from '../images/salon_computer3.png';
import './CreateBusinessAccount.css';

const CreateBusinessAccount = () => {
    const [businessName, setBusinessName] = useState('');
    const [businessEmail, setBusinessEmail] = useState('');
    const [businessPassword, setBusinessPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    const handleInputChange = (event, { value }) => {
        setPhoneNumber(value);
    };

    const handleCheckPhoneNumber = () => {
        // Perform your checks or validations here
        if (/^\d{10}$/.test(phoneNumber)) {
            return true;
        } else {
            return false;
        }
    };

    const buttonStyle = {
        // width: '100%',
        width: 'calc(100% - 30px)',
        backgroundColor: '#00b4d8',
        fontFamily: 'Poppins',
        color: 'white',
        transition: 'background-color 0.3s', // Add a smooth transition effect
        marginTop: '10px',

    };

    const buttonHoverStyle = {
        backgroundColor: '#00a2d8',
    };


    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsButtonHovered(true);
    };

    const handleMouseLeave = () => {
        setIsButtonHovered(false);
    };

    const handleButtonClick = () => {
        // Redirect to another page when the button is clicked
        window.location.href = '/register-salon';
    };

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(businessName, businessEmail, businessPassword);
    }

    return (
        <div className='background-container'>
            <div className='home-title-container'>
                <h1> Sign Up</h1>
                <p>You're one step away from getting your company on YouStyle.</p>
                <div className='form-container'>
                    <Form onSubmit={handleSubmit} className="custom-business-form">
                        {/* <div className='business-input-wrapper'> */}
                            <label>Email:</label>
                            <Input className='custom-input-field' placeholder='Email' type='email' />
                        {/* </div> */}
                        
                        <label>Password:</label>
                        <Input className='custom-input-field' placeholder='Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />
                        <label>Confirm Password:</label>
                        <Input className='custom-input-field' placeholder='Confirm Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />

                        <Button
                            type="submit"
                            style={{
                                ...buttonStyle,
                                backgroundColor: isButtonHovered ? buttonHoverStyle.backgroundColor : buttonStyle.backgroundColor,
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleButtonClick}
                        >
                            <Icon name="search" /> Create a business account
                        </Button>
                        <div className='custom-alternative-signin'>
                            <p>Already a member? <span className='custom-signin-link'> Login</span></p>
                        </div>
                    </Form>
                </div>
            </div>

            <div className='home-image-container'>
                <img src={registerImage} alt='HomeImage' className='home-image' />


            </div>
        </div>
    );
}

export default CreateBusinessAccount;