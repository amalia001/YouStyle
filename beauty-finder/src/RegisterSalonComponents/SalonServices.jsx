import React, { useState } from 'react';
import StylistForm from './StylistForm.jsx'; // Assuming you have a separate StylistForm component

const SalonServices = () => {
    const [stylists, setStylists] = useState([]);
    const [isAddingStylist, setIsAddingStylist] = useState(false);
    const [editedIndex, setEditedIndex] = useState(null);

    const handleEditStylist = (index) => {
        setEditedIndex(index);
        setIsAddingStylist(true);
    };

    const handleAddStylist = () => {
        setIsAddingStylist(true);
    };

    const handleFormSubmit = (stylistData) => {
        setStylists([...stylists, stylistData]);
        setIsAddingStylist(false);
    };

    const handleCancel = () => {
        setIsAddingStylist(false);
        setEditedIndex(null);
    };

    return (
        <div className='component-title-container'>
            <h1>Salon Services</h1>
            <p>Assign the services provided by each stylist</p>
            <div className='file-upload-container'>
                <button onClick={handleAddStylist}>Add Stylist</button>
            </div>


            {isAddingStylist &&
                <StylistForm
                    onSubmit={handleFormSubmit}
                    onCancel={handleCancel}
                    onEdit={handleEditStylist}
                    isEditing={editedIndex !== null}
                    editedIndex={editedIndex}
                    stylist={editedIndex !== null ? stylists[editedIndex] : null}
                />
            }

            <div>
                {stylists.map((stylist, index) => (
                    <div key={index} className="stylist-box">
                        <div className="stylist-details">
                            {stylist.image && <img src={URL.createObjectURL(stylist.image)} alt="Stylist" className="stylist-image" />}
                            <h3>{stylist.name}</h3>
                        </div>
                        <div className="stylist-services">
                            <ul>
                                {stylist.services.map((service, index) => (
                                    <li key={index}>{service}</li>
                                ))}
                            </ul>
                        </div>
                        <div className='file-upload-container'>
                            <button onClick={() => handleEditStylist(index)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SalonServices;
