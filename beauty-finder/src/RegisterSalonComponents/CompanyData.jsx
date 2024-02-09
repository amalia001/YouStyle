import React, { useState } from 'react';
import { Form, Dropdown, Button } from 'semantic-ui-react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CompanyData = ({ onChange }) => {
    const paymentOptions = [
        { key: 'creditCard', text: 'Credit Card', value: 'creditCard' },
        { key: 'Cash', text: 'Cash', value: 'Cash' },
    ];

    const [logoPreview, setLogoPreview] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [description, setDescription] = useState('');


    const handleLogoChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            onChange({name:'logoImage', value:file});

            const reader = new FileReader();
            reader.onloadend = () => {
                setLogoPreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDeleteLogo = () => {
        onChange({name:'logoImage', value:null});
        setLogoPreview(null);
    };


    const cityOptions = [
        { key: 'bucharest', value: 'Bucharest', text: 'Bucharest' },
        { key: 'cluj', value: 'Cluj-Napoca', text: 'Cluj-Napoca' },
        { key: 'timisoara', value: 'Timisoara', text: 'Timisoara' },
        { key: 'iasi', value: 'Iasi', text: 'Iasi' },
        // Add more cities as needed
    ];

    const handleCityChange = (event, { value }) => {
        setSelectedCity(value);
        onChange({name:'city', value:selectedCity});
    };

    const quillModules = {
        toolbar: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ align: [] }],
          ['blockquote', 'code-block'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['link', 'image'],
          ['clean'],
        ],
      };
    
      const quillFormats = [
        'header',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'align',
        'blockquote', 'code-block',
        'list', 'bullet',
        'link', 'image',
      ];


    return (
        <div className='component-title-container'>
            <h1>Information about the company</h1>
            <p>General information about your company</p>

            <Form className="personal-data-form-container">
                {/* Logo Upload */}
                <div className="input-wrapper">
                    <label>Salon Logo:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleLogoChange}
                    />
                    {logoPreview && (
                        <div className="logo-preview-container">
                            <img className="logo-preview" src={logoPreview} alt="Logo Preview" />
                            <Button onClick={handleDeleteLogo} icon="trash" color="red" />
                        </div>
                    )}
                </div>
                <div className="input-wrapper"></div>
                <div className='input-wrapper'>
                    <label>Company name:</label>
                    <input type="text" placeholder="Company name" name='companyName' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='input-wrapper'>
                    <label>Contact phone number:</label>
                    <input type="tel" placeholder="Phone number" name='salonPhone' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='input-wrapper'>
                    <label>Accepted payment methods:</label>
                    <Dropdown
                        placeholder='Select Payment Methods'
                        fluid
                        multiple
                        selection
                        options={paymentOptions}
                    />
                </div>
                <div className='input-wrapper'>
                    <label>Website:</label>
                    <input type="text" placeholder="Website" name='website' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='input-wrapper'>
                    <label>City:</label>
                    <Dropdown
                        placeholder='Select City'
                        fluid
                        search
                        selection
                        options={cityOptions}
                        value={selectedCity}
                        onChange={handleCityChange}
                    />
                </div>
                <div className='input-wrapper'>
                    <label>Address:</label>
                    <input type="text" placeholder="Last Name" name='salonAddress' onChange={(e) => onChange({name: e.target.name, value: e.target.value})} />
                </div>
                <div className='description-input-container'>
                    <label>Description:</label>
                    <ReactQuill  
                        style={{ maxWidth: '500px',backgroundColor: 'white',width: '100%', minHeight: '100px' /* Add other styles as needed */ }}
                        value={description}
                        onChange={(value) => {setDescription(value); onChange({name:'description', value:value})}}
                        modules={quillModules}
                        formats={quillFormats}
                        placeholder="Enter a description"
                    />
                </div>
            </Form>
        </div>
    );
};

export default CompanyData;
