import React, {useState}  from 'react';
import { Form, Dropdown, Icon, Button } from 'semantic-ui-react';
import './ServicesForm.css';

const StylistsForm = () => {
    const stylistOptions = [
        { key: '1', text: 'John Doe', value: 'John Doe' },
        { key: '2', text: 'Jane Smith', value: 'Jane Smith' },
        // Add more stylist options as needed
    ];

    const filterStylists = (options, query) => {
        const re = new RegExp(query, 'i');
        return options.filter((option) => re.test(option.text));
    };

    const buttonStyle = {
        width: '100%',
        backgroundColor: '#00b4d8',
        fontFamily: 'Montserrat',
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

    return (
        <Form className="custom-form">
            <Form.Field cclassName="custom-form-field">
                <Dropdown
                    className="custom-dropdown"
                    selection
                    search
                    options={stylistOptions}
                    placeholder={
                        <span style={{ color: 'black' }}>
                            <Icon name="map marker alternate" /> Find a stylist
                        </span>
                    }
                    clearable
                    filterOptions={(options, query) => filterStylists(options, query)}
                />
                <Button
                    type="submit"
                    style={{
                        ...buttonStyle,
                        backgroundColor: isButtonHovered ? buttonHoverStyle.backgroundColor : buttonStyle.backgroundColor,
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Icon name="search" /> Find stylist
                </Button>
            </Form.Field>


        </Form>
    );
};

export default StylistsForm;