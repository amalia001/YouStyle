import React from 'react';
import { Form } from 'semantic-ui-react';

const PersonalData = () => {
    return (
        <div className='component-title-container'>
            <h1>Information about the business owner</h1>
            <p>Please provide legal information about the owner of the business</p>
            <Form className="personal-data-form-container">
                <div className='input-wrapper'>
                    <label>First name:</label>
                    <input type="text" placeholder="First Name" />
                </div>
                <div className='input-wrapper'>
                    <label>Last name:</label>
                    <input type="text" placeholder="Last Name" />
                </div>
                <div className='input-wrapper'>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" />
                </div>
            </Form>
        </div>
    );
};

export default PersonalData;
