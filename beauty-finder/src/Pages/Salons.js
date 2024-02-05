import React from 'react';
import './Salons.css';
import { Checkbox } from 'semantic-ui-react'

const Salons = () => {

    const filtersList = ['Makeup', 'Hair', 'Nails', 'Barbershop', 'Spa', 'Tattoo', 'Piercing', 'Massage', 'Waxing', 'Eyelashes', 'Eyebrows']
    const zoneList = ['Canta', 'Pacurari', 'Dacia', 'Alexandru', 'Copou', 'Nicolina', 'Podu Ros', 'Mirce cel Batran', 'Cantemir', 'Centru', 'Tatarasi', 'Tudor Vladimirescu', 'Baza 3']

    return (
        <div className='salons-background-container'>
            <h1 className='salons-title'>Search for beauty salons and barbershops nearby</h1>
            <div className='filters-sidebar-container'>
                <div className='filters-title'>Filters</div>
                <div className='filters-subtitle'> Category</div>
                <div className='filters'>
                    {filtersList.map((filter, index) => {
                        return (
                            <div key={index} className='filter'>
                                <Checkbox label={filter} />
                            </div>
                        )
                    })}
                </div>
                <div className='filters-subtitle'> Zone</div>
                <div className='filters'>
                    {zoneList.map((filter, index) => {
                        return (
                            <div key={index} className='filter'>
                                <Checkbox label={filter} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    );
};

export default Salons;