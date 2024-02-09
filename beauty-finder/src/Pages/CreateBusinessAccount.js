import React, { useContext, useState } from 'react';
import { Form, Input, Icon, Button } from 'semantic-ui-react';
import { useNavigate  } from 'react-router-dom';

import registerImage from '../images/salon_computer3.png';
import './CreateBusinessAccount.css';

import { AppContext } from '../Classes/Application';
import { createForm } from '../Classes/BusinessForm';

const CreateBusinessAccount = () => {
    const { application } = useContext(AppContext);
    const navigate = useNavigate ();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
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
        const {email, password} = formData;
        application.setBusinessForm(createForm(email, password));
        navigate('/register-salon');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevForm => ({ ...prevForm, [name]: value }));
    };


    const passwordsMatch = formData.password === formData.confirmPassword;
    return (
        <div className='background-container'>
            <div className='home-title-container'>
                <h1> Sign Up</h1>
                <p>You're one step away from getting your company on YouStyle.</p>
                <div className='form-container'>
                    <Form className="custom-business-form">
                        {/* <div className='business-input-wrapper'> */}
                        <label>Email:</label>
                        <Input className='custom-input-field' name="email" placeholder='Email' type='email' onChange={handleChange} />
                        {/* </div> */}

                        <label>Password:</label>
                        <Input className={`custom-input-field ${passwordsMatch ? 'positive' : 'negative'}`} name="password" placeholder='Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                            onChange={handleChange}
                        />
                        <label>Confirm Password:</label>
                        <Input className={`custom-input-field ${passwordsMatch ? 'positive' : 'negative'}`} name="confirmPassword" placeholder='Confirm Password' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                            onChange={handleChange}
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