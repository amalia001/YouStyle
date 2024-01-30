import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Form, Dropdown, Icon } from 'semantic-ui-react';
import L from 'leaflet';
import pin from '../images/location-pin.png';
import 'leaflet/dist/leaflet.css';
import ServicesForm from './ServicesForm';
import StylistsForm from './StylistsForm';
import './Home.css';
import homeImage from '../images/salon_computer2.png';

const customIcon = new L.Icon({
    iconUrl: pin,
    iconSize: [32, 32], // adjust the size based on your icon
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
});

const SchedulingContainer = () => {
    const [isServices, setIsServices] = useState(true);
    const [isSalons, setIsSalons] = useState(false);
    const [isStylists, setIsStylists] = useState(false);

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get_data?filename=data.json');
                const data = await response.json();
                setMarkers(data.markers);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run the effect only once on mount


    const handleClick = (name) => {
        setIsServices(false);
        setIsSalons(false);
        setIsStylists(false);

        if (name === 'Services') setIsServices(true);
        if (name === 'Salons') setIsSalons(true);
        if (name === 'Stylists') setIsStylists(true);
    }
    return (
        <div className='background-container'>
            <div className='home-title-container'>
                <h1>The online catalogue of <span style={{ color: '#f72585' }}>beauty</span> services</h1>
                <div className='scheduling-container'>
                    <div className="scheduling-container-header">
                        <button
                            className={isServices ? "active" : ""}
                            onClick={() => { handleClick('Services') }}
                        >
                            Services
                        </button>
                        <button
                            className={isSalons ? "active" : ""}
                            onClick={() => { handleClick('Salons') }}
                        >
                            Salons
                        </button>
                        <button
                            className={isStylists ? "active" : ""}
                            onClick={() => { handleClick('Stylists') }}
                        >
                            Stylists
                        </button>

                    </div>
                    <div className="segment-content">
                        {isServices &&
                            //    <form onSubmit={handleSubmit}>
                            <ServicesForm />
                        }
                        {isSalons && (
                            <div>
                                <MapContainer
                                    center={[47.1591, 27.5879]} // Iasi city coordinates
                                    zoom={13}
                                    style={{ height: '280px', width: '100%', marginTop: '10px', borderRadius: '10px'}}
                                >
                                    <TileLayer
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    />
                                    {markers.map((marker, index) => (
                                        <Marker key={index} position={marker.position} icon={customIcon}>
                                            <Popup>
                                                {marker.name}
                                            </Popup>
                                        </Marker>
                                    ))}
                                </MapContainer>
                            </div>
                        )}
                        {isStylists &&
                            (<StylistsForm></StylistsForm>)
                        }
                    </div>
                </div>
            </div>

            <div className='home-image-container'>
                <img src={homeImage} alt='HomeImage' className='home-image' />


            </div>
        </div>
        
    );
}

export default SchedulingContainer;