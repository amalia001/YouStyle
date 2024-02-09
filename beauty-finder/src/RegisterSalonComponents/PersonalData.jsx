import React from 'react';
import { Form } from 'semantic-ui-react';

const PersonalData = ({onChange}) => {
    return (
        <div className='component-title-container'>
            <h1>Information about the business owner</h1>
            <p>Please provide legal information about the owner of the business</p>
            <Form className="personal-data-form-container">
                <div className='input-wrapper'>
                    <label>First name:</label>
                    <input type="text" placeholder="First Name" name='firstName' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='input-wrapper'>
                    <label>Last name:</label>
                    <input type="text" placeholder="Last Name" name='lastName' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='input-wrapper'>
                    <label>Phone Number:</label>
                    <input type="tel" placeholder="Phone" name='phone' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                
            </Form>
        </div>
    );
};

export default PersonalData;
