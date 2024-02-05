import React, { useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './ClientAccount.css'; // Import your CSS file for styling
import Appointments from '../MyAccountComponents/Appointments';
import Favourites from '../MyAccountComponents/Favourites';
import Settings from '../MyAccountComponents/Settings';
import Notifications from '../MyAccountComponents/Notifications';
import './GlobalStyles.css';

const pageNames = {
    'Appointments': { "Component": <Appointments />, "Icon": "calendar alternate outline" },
    'Favorites': { "Component": <Favourites />, "Icon": "heart outline" },
    'Settings': { "Component": <Settings />, "Icon": "setting" },
    'Notifications': { "Component": <Notifications />, "Icon": "bell outline" },
};


const ClientAccount = () => {
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
                            className={`sidebar-item ${pageName} ${selectedPage === pageName ? 'active' : ''}`}
                        >
                            <Icon name={pageNames[pageName]["Icon"]} />
                            {pageName}
                        </div>
                    ))

                }

            </div>
            <div className="main-panel">
                {pageNames[selectedPage]["Component"]}
            </div>


        </div>
    );
};

export default ClientAccount;
