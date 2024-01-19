import React, { useState } from 'react';
import './MyAccount.css'; // Import your CSS file for styling

const MyAccount = () => {
    const [selectedPage, setSelectedPage] = useState('dashboard'); // Initial selected page

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className="my-account-container">
            <div className="sidebar">
                <div
                    className={`sidebar-item ${selectedPage === 'dashboard' ? 'active' : ''}`}
                    onClick={() => handlePageChange('dashboard')}
                >
                    Dashboard
                </div>
                <div
                    className={`sidebar-item ${selectedPage === 'profile' ? 'active' : ''}`}
                    onClick={() => handlePageChange('profile')}
                >
                    Profile
                </div>
                {/* Add more sidebar items as needed */}
            </div>
            <div className="main-panel">
                <h1>My Account</h1>
                {selectedPage === 'dashboard' && (
                    <div>
                        {/* Content for Dashboard page */}
                        <p>Dashboard content goes here.</p>
                    </div>
                )}
                {selectedPage === 'profile' && (
                    <div>
                        {/* Content for Profile page */}
                        <p>Profile content goes here.</p>
                    </div>
                )}
                {/* Add more content sections for other pages as needed */}
            </div>
        </div>
    );
};

export default MyAccount;
