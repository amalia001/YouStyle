import React, { useState } from 'react';
import './MyAccount.css'; // Import your CSS file for styling
import Appointments from '../MyAccountComponents/Appointments';
import Favourites from '../MyAccountComponents/Favourites';
import Settings from '../MyAccountComponents/Settings';
import Notifications from '../MyAccountComponents/Notifications';

const pageNames = {
    'Appointments': <Appointments />,
    'Favorites': <Favourites/>,
    'Settings': <Settings/>,
    'Notifications': <Notifications/>,
};

const MyAccount = () => {
    const [selectedPage, setSelectedPage] = useState('Appointments'); // Initial selected page

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className="my-account-container">
            <div className="sidebar">
                {
                    Object.keys(pageNames).map((pageName) => (
                        <div 
                          key={pageName} // Make sure to add a unique key for each element in the array
                          onClick={() => handlePageChange(pageName)}
                          className={`sidebar-item ${selectedPage === 'dashboard' ? 'active' : ''}`}
                        >
                          {pageName}
                        </div>
                      ))
                      
                }
            </div>
            <div className="main-panel">
                {pageNames[selectedPage]}
            </div>
        </div>
    );
};

export default MyAccount;
