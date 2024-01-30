import React, { useState } from 'react';
import { Form, Button, Icon, Input } from 'semantic-ui-react';
import './SignUp.css';

const SignUpForm = ({ onClose, onSwitchToSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleDropdownToggle = () => {
        onClose();
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

    const handleSubmit = () => {
        // Handle form submission logic here
        if(handleCheckPhoneNumber())
            console.log('Form submitted');
        else
            console.log('Form not submitted');
    };

    const signUpButtonStyle = {
        width: '100%',
        backgroundColor: '#00b4d8',
        fontFamily: 'Poppins',
        color: 'white',
        transition: 'background-color 0.3s', // Add a smooth transition effect
        marginTop: '10px',
    
    };
    
    const signUpHoverStyle = {
        backgroundColor: '#00a2d8',
    };
    
    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsButtonHovered(true);
    };

    const handleMouseLeave = () => {
        setIsButtonHovered(false);
    };

    return (
        <div className="signup-popup">
            <div className="signup-content">
                <div className="custom-close-button" onClick={handleDropdownToggle}>
                    &times; {/* '×' character for close button */}
                </div>
                <h2>Create an account</h2>
                <Form className='custom-signup-form'>
                    <Form.Field className='custom-signup-form-field'>
                        <Input className='custom-input-field' placeholder='First Name' type='text' />
                        <Input className='custom-input-field' placeholder='Last Name' type='text' />
                        {/* <Input className='custom-input-field' placeholder='Email' type='email' /> */}
                        <Input className='custom-input-field' placeholder='Phone Number' type='tel' onChange={handleInputChange} />
                        <Input className='custom-input-field' placeholder='Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />
                        <Input className='custom-input-field' placeholder='Confirm Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />
                         <Button
                            className='signin-button'
                            style={{
                                ...signUpButtonStyle,
                                backgroundColor: isButtonHovered ? signUpHoverStyle.backgroundColor : signUpButtonStyle.backgroundColor,
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            primary onClick={handleSubmit}>
                            Register
                        </Button>
                        <div className='custom-alternative-signin'>
                            <span>Already have an account?</span>
                            <span className='custom-signin-link' onClick={onSwitchToSignIn}>
                                Log In
                            </span>
                        </div>
                    </Form.Field>
                </Form>
            </div>
        </div >
    );
};

export default SignUpForm;