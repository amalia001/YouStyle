import React, { useEffect, useState } from 'react';
import { Icon } from 'semantic-ui-react';

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get_data?filename=appointments.json');
                const data = await response.json();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, []);

    return (
        <div>
            {appointments.map((appointment, index) => (
                <div key={index} className='appointment-container'>
                    {/* <div className="profile-picture">
                        <img src='./profile.png' alt="Stylist Profile" />
                    </div> */}
                    <div className>
                        <h3>{`${appointment.stylist} • ${appointment.salon}`}</h3>
                        <div className='custom-app-date'>
                            <Icon name='calendar alternate outline' />
                            {`${appointment.date}, ${appointment.time}`}
                        </div>
                        <div className='custom-app-location'>
                            <Icon name='map marker alternate' />
                            {`${appointment.location}`}
                        </div>
                        {appointment.services.map((service, serviceIndex) => (
                            <div key={serviceIndex} >
                                <div className="service-container">
                                    <div className="service-name">
                                        {`${service.name}`}
                                    </div>
                                    <div className="service-price">
                                        {/* <span>Price:</span> */}
                                        {`${service.price}`}
                                    </div>
                                </div>
                                <div className="service-duration">
                                    {`${service.duration}`}
                                </div>
                                <div className="service-container">
                                    <div className="service-name">
                                        <span>Operational services</span>
                                    </div>
                                    <div className="service-price">
                                        {/* <span>Price:</span> */}
                                        <span>$3</span>
                                    </div>
                                </div>
                               
                                <div className={`service-status ${service.status === 'Confirmed' ? 'confirmed' : (service.status === 'Cancelled' ? 'cancelled' : 'pending')}`}>
                                {service.status === 'Confirmed' && <Icon name='check circle' color='green' />}
                                    {service.status === 'Cancelled' && <Icon name='cancel' color='red' />}
                                    {service.status === 'Pending' && <Icon name='clock' color='grey' />}
                                    {`${service.status}`}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Appointments;
