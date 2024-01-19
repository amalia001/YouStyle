import React, { useState } from 'react';
import './Catalog.css';

const Catalog = () => {
    const [gender, setGender] = useState('both');
    const [type, setType] = useState('all');

    // Sample data with image links
    const catalogData = [
        {
            id: 1,
            location: 'Paris',
            gender: 'man',
            type: 'haircut',
            imageUrl: 'link-to-image-1.jpg',
        },
        {
            id: 2,
            location: 'New York',
            gender: 'woman',
            type: 'nail',
            imageUrl: 'link-to-image-2.jpg',
        },
        // Add more items as needed
    ];

    const filteredCatalog = catalogData.filter(item => {
        const genderFilter = gender === 'both' || item.gender === gender;
        const typeFilter = type === 'all' || item.type === type;

        return genderFilter && typeFilter;
    });

    return (
        <div className='catalog-page'>
            <h1>Catalog</h1>
            <p>Our online catalogue, search for inspiration on your next visit to one of our salons</p>
            <div className='labels-wrapper'>
                <div className='label-element'>
                    <label>
                        Gender:
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="both">Both</option>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                        </select>
                    </label>
                </div>
                <div className='label-element'>
                    <label>
                        Type:
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="all">All</option>
                            <option value="haircut">Haircut</option>
                            <option value="nail">Nail</option>
                            {/* Add more type options as needed */}
                        </select>
                    </label>
                </div>
            </div>

            <div>
                {filteredCatalog.map(item => (
                    <div key={item.id}>
                        <img src={item.imageUrl} alt={`Catalog item ${item.id}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalog;
