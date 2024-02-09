import React, { useState, useEffect } from 'react';
import './Salons.css';
import { Checkbox, Input, Dropdown, Button, Icon } from 'semantic-ui-react';

const Salons = () => {
    const filtersList = ['Makeup', 'Hair', 'Nails', 'Barbershop', 'Spa', 'Tattoo', 'Piercing', 'Massage', 'Waxing', 'Eyelashes', 'Eyebrows'];
    const zoneList = ['Canta', 'Pacurari', 'Dacia', 'Alexandru', 'Copou', 'Nicolina', 'Podu Ros', 'Mirce cel Batran', 'Cantemir', 'Centru', 'Tatarasi', 'Tudor Vladimirescu', 'Baza 3'];
    const paymentOptions = [
        { key: 'creditCard', text: 'Credit Card', value: 'creditCard' },
        { key: 'Cash', text: 'Cash', value: 'Cash' },
    ];

    const [activeIcon, setActiveIcon] = useState(null);
    const [salonsData, setSalonsData] = useState([]);

    useEffect(() => {
        // Fetch or import your salon data from the salons.json file
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get_data?filename=salons.json');
                const data = await response.json();
                setSalonsData(data.salons);
            } catch (error) {
                console.error('Error fetching salon data:', error);
            }
        };

        fetchData();
    }, []);

    const handleIconClick = (iconName) => {
        setActiveIcon(iconName === activeIcon ? null : iconName);
    };

    return (
        <div className='salons-background-container'>
            <h1 className='salons-title'>Search for beauty salons and barbershops nearby</h1>

            <div className='page-main-panel'>
                <div className='filters-sidebar-container'>
                    <div className='filters-title'>Filters</div>
                    <div className='filters-subtitle'> Category</div>
                    <div className='filters'>
                        {filtersList.map((filter, index) => (
                            <div key={index} className='filter'>
                                <Checkbox label={filter} />
                            </div>
                        ))}
                    </div>
                    <div className='filters-subtitle'> Zone</div>
                    <div className='filters'>
                        {zoneList.map((filter, index) => (
                            <div key={index} className='filter'>
                                <Checkbox label={filter} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='main-content-container'>
                    <div className='search-bar-container'>
                        <Input
                            className='search-input'
                            icon='search'
                            placeholder='Salon name'
                        />
                        <Dropdown
                            placeholder='Cash, Card '
                            fluid
                            multiple
                            selection
                            options={paymentOptions}
                        />
                        <Dropdown
                            placeholder='Search by area'
                            selection
                            clearable
                            options={zoneList.map((zone, index) => ({
                                key: index,
                                text: zone,
                                value: zone,
                            }))}
                        />
                        <Button primary>Search</Button>
                    </div>

                    <div className='additional-bar-container'>
                        <div className='results-count'>123 Results</div>
                        <div className='sort-dropdown'>
                            <span>Sort by</span>
                            <Dropdown
                                placeholder='A-z'
                                selection
                                options={[
                                    { key: 'A-z', text: 'A-z', value: 'A-z' },
                                    { key: 'z-A', text: 'z-A', value: 'z-A' },
                                    { key: 'Rating', text: 'Rating', value: 'Rating' },
                                    { key: 'Nearby', text: 'Nearby', value: 'Nearby' },
                                ]}
                            />
                        </div>
                        <div className='view-options'>
                            <Icon
                                name='list layout'
                                className={activeIcon === 'list' ? 'active' : ''}
                                onClick={() => handleIconClick('list')}
                            />
                            <Icon
                                name='th'
                                className={activeIcon === 'th' ? 'active' : ''}
                                onClick={() => handleIconClick('th')}
                            />
                            <Icon
                                name='map marker alternate'
                                className={activeIcon === 'map' ? 'active' : ''}
                                onClick={() => handleIconClick('map')}
                            />
                        </div>
                    </div>

                    <div className='salon-list-container'>
                        {salonsData.map((salon, index) => (
                            <div key={index} className='salon-container'>
                                <img src={salon.picture} alt={`Salon ${index + 1}`} className='salon-image' />
                                <div className='salon-details'>
                                    <div className='salon-name'>{salon.name}</div>
                                    <div className='salon-info'>
                                        <div>{salon.address}</div>
                                        <div>{salon.phone}</div>
                                    </div>
                                    <div className='salon-schedule'>
                                        <span>Working Schedule:</span>
                                        {Object.entries(salon.schedule).map(([day, hours]) => (
                                            <div key={day}>{`${day}: ${hours}`}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Salons;
