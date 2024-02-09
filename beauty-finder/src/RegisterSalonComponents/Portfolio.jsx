import React, { useState, useRef } from 'react';

const Portfolio = ({onChange}) => {
    const [uploadedPhotos, setUploadedPhotos] = useState([]);
    const maxPhotos = 3;
    const fileInputRef = useRef(null);

    const handlePhotoUpload = (event) => {
        const files = event.target.files;

        const newPhotos = Array.from(files);
    
        newPhotos.forEach(file => {
            console.log('File Name:', file.name);
            console.log('File Type:', file.type);
            console.log('File Size:', file.size, 'bytes');
    
            const tempUrl = URL.createObjectURL(file);
            console.log('Temporary URL:', tempUrl);
        });
    
        setUploadedPhotos([...uploadedPhotos, ...newPhotos]);
        onChange({name: 'photos', value: uploadedPhotos});
    };

    const handleDeletePhoto = (index) => {
        const updatedPhotos = [...uploadedPhotos];
    
        // Revoke the URL of the photo being deleted
        const photoToDelete = updatedPhotos[index];
        URL.revokeObjectURL(photoToDelete);
    
        updatedPhotos.splice(index, 1);
        setUploadedPhotos(updatedPhotos);
        onChange({name: 'photos', value: null});
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <div className='component-title-container'>
            <h1>Salon's portfolio</h1>
            <p>Please upload at least 3 photos of the salon's work.</p>

            {/* Custom-styled "Choose File" button */}
            <div className="file-upload-container">
                <button onClick={triggerFileInput}>Choose File</button>
                <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handlePhotoUpload}
                />
            </div>

            {/* Display uploaded photos */}
            <div className="uploaded-photos-container">
                {uploadedPhotos.map((photo, index) => (
                    <div key={index} className="uploaded-photo">
                        <img
                            src={URL.createObjectURL(photo)}
                            alt={`Uploaded ${index + 1}`}
                            className="thumbnail"
                        />
                        <button onClick={() => handleDeletePhoto(index)}>X</button>
                    </div>
                ))}
            </div>

            {uploadedPhotos.length >= maxPhotos && (
                <button onClick={() => console.log('Proceed to the next step')}>Proceed</button>
            )}
        </div>
    );
};

export default Portfolio;
