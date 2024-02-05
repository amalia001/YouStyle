import React, { useState } from 'react';
import { Modal, Button, Checkbox } from 'semantic-ui-react';

const servicesList = ['Haircut', 'Manicure', 'Pedicure', 'Facial', 'Massage', 'Haircuts','Hairstyling'
,'Hair coloring', 'Nail extensions', 'Waxing', 'Makeup', 'Eyelashes', 'Brows', 'Mens haircuts and styling',
'Beard trims and shaping', 'Shaving', ];

const StylistForm = ({ onSubmit, onCancel, onEdit, isEditing, editedIndex, stylist }) => {
    const [stylistName, setStylistName] = useState('');
    const [selectedServices, setSelectedServices] = useState([]);
    const [stylistImage, setStylistImage] = useState(null);

    const handleServiceChange = (service) => {
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((s) => s !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = () => {
        const stylistData = { name: stylistName, services: selectedServices, image: stylistImage };
        if (isEditing) {
            onEdit(stylistData, editedIndex);
        } else {
            onSubmit(stylistData);
        }
    };

    const handlePhotoUpload = (event) => {
        const file = event.target.files[0];
        setStylistImage(file);
    };

    const handleDeletePhoto = () => {
        setStylistImage(null);
    };

    return (
        <Modal open onClose={onCancel}>
            <Modal.Header>{isEditing ? 'Edit Stylist' : 'Add Stylist'}</Modal.Header>
            <Modal.Content>
                <form className='stylist-form'>
                    <label>
                        Stylist Image:<br></br> {stylist?.image && 'Uploaded'}
                        <input
                            type='file'
                            accept="image/*"
                            onChange={handlePhotoUpload}
                        />
                    </label>
                    {stylistImage &&
                        <div className="uploaded-photo">
                            <img
                                src={URL.createObjectURL(stylist?.image ?? stylistImage)}
                                alt={`Stylist ${stylistName}`}
                                className="thumbnail"
                            />
                            <button onClick={() => handleDeletePhoto()}>X</button>
                        </div>
                    }
                    <label>
                        Stylist Name: {stylist?.name}
                        <input
                            type='text'
                            value={stylistName || stylist?.name}
                            onChange={(e) => setStylistName(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Select Services: {stylist?.services.join(', ')}
                        <div>
                            {servicesList.map((service) => (
                                <Checkbox
                                    key={service}
                                    label={service}
                                    checked={
                                        selectedServices.includes(service)
                                        || (isEditing && stylist.services.includes(service))
                                    }
                                    onChange={() => handleServiceChange(service)}
                                />
                            ))}
                        </div>
                    </label>
                </form>
            </Modal.Content>
            <Modal.Actions>
                <Button positive onClick={handleSubmit}>
                    {isEditing ? 'Save Changes' : 'Save'}
                </Button>
                <Button negative onClick={onCancel}>
                    Cancel
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default StylistForm;
