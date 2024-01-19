import React, { useEffect, useState } from 'react';


const Appointments = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await fetch('/appointments.json');
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
                <div key={index}>
                    <h3>{`${appointment.client}-${appointment.salon}`}</h3>
                    <p>{`${appointment.date}-${appointment.time}`}</p>
                    <p>{`${appointment.location}`}</p>

                    {appointment.services.map((service, serviceIndex) => (
                        <div key={serviceIndex}>
                            <p>{`${service.name}`}</p>
                            <p>{`${service.price}`}</p>
                            <p>{`${service.duration}`}</p>
                            <p>{`${service.status}`}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Appointments;
