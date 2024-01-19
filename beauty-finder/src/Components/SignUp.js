import React, { useState } from 'react';
import { Form, Button, Icon, Input } from 'semantic-ui-react';
import './SignUp.css';

const SignUpForm = ({ onClose }) => {
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
                        <Input className='custom-input-field' placeholder='Email' type='email' />
                        <Input className='custom-input-field' placeholder='Phone Number' type='tel' onChange={handleInputChange} />
                        <Input className='custom-input-field' placeholder='Pass...' type={showPassword ? 'text' : 'password'}
                            icon={<Icon name={showPassword ? 'eye slash' : 'eye'} link onClick={togglePasswordVisibility} />}
                        />
                        <Button primary onClick={handleSubmit}>Submit</Button>
                    </Form.Field>
                </Form>
            </div>
        </div >
    );
};

export default SignUpForm;