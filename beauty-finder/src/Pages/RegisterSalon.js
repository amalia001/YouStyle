import React, { useContext, useState } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import CompanyData from '../RegisterSalonComponents/CompanyData.jsx';
import SalonServices from '../RegisterSalonComponents/SalonServices.jsx';
import Portfolio from '../RegisterSalonComponents/Portfolio.jsx';
import PersonalData from '../RegisterSalonComponents/PersonalData.jsx';
import WorkingSchedule from '../RegisterSalonComponents/WorkingSchedule.jsx';
import './GlobalStyles.css';
import './RegisterSalon.css';

import { AppContext } from '../Classes/Application';

const pageNames = {
    'PersonalData': { "Component": (props) => <PersonalData {...props} />, 'Next': 'CompanyData', 'Text': 'Owner Personal Data' },
    'CompanyData': { "Component": (props) => <CompanyData {...props} />, 'Next': 'Portfolio', 'Text': 'Company Data' },
    'Portfolio': { "Component": (props) => <Portfolio {...props} />, 'Next': 'WorkingSchedule', 'Text': 'Portfolio' },
    'WorkingSchedule': { "Component": (props) => <WorkingSchedule {...props} />, 'Next': 'SalonServices', 'Text': 'Working Schedule' },
    'SalonServices': { "Component": (props) => <SalonServices {...props} />, 'Next': null, 'Text': 'Salon Services' },
};

const RegisterSalon = () => {
    const { application } = useContext(AppContext);

    const [formDataInfo, setFormDataInfo] = useState({});
    const [selectedPage, setSelectedPage] = useState('PersonalData');

    const handlePageChange = (page) => {
        setSelectedPage(page);
    };

    return (
        <div className='full-screen'>
            <div className="register-salon-container">
                <div className="register-salon-sidebar">
                    {Object.keys(pageNames).map((pageName) => (
                        <div
                            className={`register-salon-sidebar-item ${pageNames[pageName]["Done"] ? 'done' : ''} ${selectedPage === pageName ? 'selected' : ''}`}
                            onClick={() => {
                                if (pageNames[pageName]["Done"])
                                    handlePageChange(pageName)
                            }}
                            style={{ cursor: pageNames[pageName]["Done"] ? 'pointer' : 'not-allowed' }}
                        >
                            <Icon name={
                                pageNames[pageName]["Done"] ?
                                    'check circle' :
                                    selectedPage === pageName ?
                                        'check circle outline' :
                                        'circle outline'
                            } />
                            {pageNames[pageName]["Text"]}
                        </div>
                    ))}
                </div>
                <div className="register-salon-main-panel" >
                    {pageNames[selectedPage]["Component"]({
                        onChange: (data) => {
                            const { name, value } = data;
                            setFormDataInfo(prevForm => ({ ...prevForm, [name]: value }));
                        }
                    })}

                    <div className="horizontal-bar">
                        {pageNames[selectedPage]["Next"] === null ?
                            <Button
                                className='next-button'
                                onClick={() => {
                                    application.setBusinessFormData(formDataInfo);
                                    console.log(application);
                                }}
                            >
                                <span>Continue</span>
                            </Button>
                            : <Button
                                className='next-button'
                                onClick={() => {
                                    pageNames[selectedPage]["Done"] = true;
                                    handlePageChange(pageNames[selectedPage]["Next"])
                                }}

                            ><span >Next page</span>
                            </Button>
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegisterSalon;