import React  from 'react';
import { Form, Dropdown, Icon } from 'semantic-ui-react';
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
            </Form.Field>


        </Form>
    );
};

export default StylistsForm;