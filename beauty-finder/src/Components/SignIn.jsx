import React, { useState } from 'react';
import { Form, Button, Icon, Input, Checkbox } from 'semantic-ui-react';
import './SignIn.css';

const SignInForm = ({ onClose, onSwitchToRegister }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isBusinessAccount, setIsBusinessAccount] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleDropdownToggle = () => {
        onClose();
    };

    const handleEmailChange = (event, { value }) => {
        setEmail(value);
    };

    const handlePasswordChange = (event, { value }) => {
        setPassword(value);
    };

    const handleCheckboxChange = () => {
        setIsBusinessAccount(!isBusinessAccount);
    };


    const handleSubmit = () => {
        if (email && password) {
            console.log('Form submitted');
        } else {
            console.log('Form not submitted. Please fill in both email and password fields.');
        }
    };

    const signInButtonStyle = {
        width: '100%',
        backgroundColor: '#00b4d8',
        fontFamily: 'Poppins',
        color: 'white',
        transition: 'background-color 0.3s', // Add a smooth transition effect
        marginTop: '10px',

    };

    const signInHoverStyle = {
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
        <div className="signin-popup">
            <div className="signin-content">
                <div className="custom-close-button" onClick={handleDropdownToggle}>
                    &times; {/* '×' character for close button */}
                </div>
                <h2>Welcome back!</h2>
                <Form className='custom-signin-form'>
                    <Form.Field className='custom-signin-form-field'>
                        <Input
                            className='custom-input-field'
                            placeholder='Email'
                            type='email'
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <Input
                            className='custom-input-field'
                            placeholder='Password'
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={handlePasswordChange}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />

                        <Checkbox
                            label='Sign in with business account'
                            checked={isBusinessAccount}
                            onChange={handleCheckboxChange}
                            style={{ fontFamily: 'Poppins', fontWeight: '400'}}
                        />

                        <Button
                            className='signin-button'
                            style={{
                                ...signInButtonStyle,
                                backgroundColor: isButtonHovered ? signInHoverStyle.backgroundColor : signInButtonStyle.backgroundColor,
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            primary onClick={handleSubmit}>
                            Sign In
                        </Button>
                        <div className='custom-reset-pass'>Reset password</div>
                        <div className='custom-alternative-signup'>
                            <span>Don't have an account?</span>
                            <span className='custom-signup-link' onClick={onSwitchToRegister}>
                                Register
                            </span>
                        </div>
                    </Form.Field>
                </Form>
            </div>
        </div >
    );
};

export default SignInForm;
