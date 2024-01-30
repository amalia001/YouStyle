import React, { useState } from 'react';
import { Form, Dropdown, Button, Icon, Popup } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import 'semantic-ui-css/semantic.min.css'; // Import the Semantic UI CSS
import './ServicesForm.css';
// import './GlobalStyles.css';


const CustomDate = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [startTime, setStartTime] = useState('00:00');
    const [endTime, setEndTime] = useState('23:00');

    // Generate time options in intervals of 1 hour
    const timeOptions = [];
    for (let hour = 0; hour <= 23; hour++) {
        for (let minute = 0; minute < 60; minute += 60) {
            const formattedTime = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeOptions.push({ key: formattedTime, text: formattedTime, value: formattedTime });
        }
    }

    return (
        <Popup
            trigger={
                <div className='custom-calendar-field'>
                    {/* template with selected date and time span */}
                    <span>
                        <Icon name="calendar alternate outline" />
                        Date and Time Span:
                    </span>
                    {/* <label htmlFor="date">Date and Time Span: </label> */}
                    <label htmlFor="date" style={{ marginRight: '10px', marginBottom: '0', marginLeft: '20px' }}>{selectedDate.toLocaleDateString()}, {startTime} - {endTime}</label>
                </div>
            } on="click"
            position="bottom center"
        >
            <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                inline
            />
            <div>
                <label htmlFor="startTime">Select Start Time:</label>
                <Dropdown
                    id="startTime"
                    selection
                    options={timeOptions}
                    value={startTime}
                    onChange={(e, { value }) => setStartTime(value)}
                />
            </div>
            <div>
                <label htmlFor="endTime">Select End Time:</label>
                <Dropdown
                    id="endTime"
                    selection
                    options={timeOptions}
                    value={endTime}
                    onChange={(e, { value }) => setEndTime(value)}
                />
            </div>
        </Popup>
    );
};

const serviceOptions = [
    { key: 'haircut', text: 'Haircut', value: 'Haircut' },
    { key: 'nails', text: 'Nails', value: 'Nails' },
    { key: 'skin', text: 'Skin', value: 'Skin' },
];

const genderOptions = [
    { key: 'male', text: 'Male', value: 'Male', icon: 'male' },
    { key: 'female', text: 'Female', value: 'Female', icon: 'female' },
];

const buttonStyle = {
    width: '100%',
    backgroundColor: '#00b4d8',
    fontFamily: 'Poppins',
    color: 'white',
    transition: 'background-color 0.3s', // Add a smooth transition effect
    marginTop: '10px',

};

const buttonHoverStyle = {
    backgroundColor: '#00a2d8',
};


const ServicesForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
    };

    const [isButtonHovered, setIsButtonHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsButtonHovered(true);
    };

    const handleMouseLeave = () => {
        setIsButtonHovered(false);
    };

    return (
        
            <Form onSubmit={handleSubmit} className="custom-form">
                <Form.Field className="custom-form-field">
                    <Dropdown
                        className="custom-dropdown"
                        selection
                        options={serviceOptions}
                        placeholder={
                            <span style={{ color: 'black' }}>
                                <Icon name="cut icon" /> Select a service
                            </span>
                        }
                        clearable
                    />
                </Form.Field>

                <CustomDate className="custom-calendar-field" />

                <Button
                    type="submit"
                    style={{
                        ...buttonStyle,
                        backgroundColor: isButtonHovered ? buttonHoverStyle.backgroundColor : buttonStyle.backgroundColor,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Icon name="search" /> Search for beauty services
                </Button>
            </Form>

           
    
    );
};

export default ServicesForm;
