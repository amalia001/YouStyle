import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react'

const WorkingSchedule = () => {
    const [schedule, setSchedule] = useState({
        monday: { enabled: true, start: '08:00', closing: '20:00' },
        tuesday: { enabled: true, start: '08:00', closing: '20:00' },
        wednesday: { enabled: true, start: '08:00', closing: '20:00'  },
        thursday: { enabled: true, start: '08:00', closing: '20:00'  },
        friday: { enabled: true, start: '08:00', closing: '20:00'  },
        saturday: { enabled: true, start: '08:00', closing: '20:00'  },
        sunday: {enabled: true, start: '08:00', closing: '20:00'  },
    });

    const handleSwitchChange = (day) => {
        setSchedule(prevSchedule => ({
            ...prevSchedule,
            [day]: {
                ...prevSchedule[day],
                enabled: !prevSchedule[day].enabled,
            },
        }));
    };

    const handleScheduleChange = (day, type, value) => {
        setSchedule(prevSchedule => ({
            ...prevSchedule,
            [day]: {
                ...prevSchedule[day],
                [type]: value,
            },
        }));
    };


    return (
        <div className='component-title-container'>
            <h1>Working Schedule</h1>
            <p>Please fill in the working schedule of your salon</p>

            <div className="working-schedule-container">
                {Object.entries(schedule).map(([day, { enabled, start, closing }], index) => (
                    <div key={day} className={`day-container ${(index % 2 === 0) ? 'even' : 'odd'}`}>
                        <div className="day-switch-container">
                            <h3 style={{marginRight:'20px'}}>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
                            <Checkbox toggle onChange={() => handleSwitchChange(day)} 
                            checked={enabled}
                            defaultChecked={true}
                            style={{zIndex:'0'}}
                              />
                        </div>
                        <div className="time-inputs">
                            <input
                                type="time"
                                value={start}
                                onChange={(e) => handleScheduleChange(day, 'start', e.target.value)}
                                disabled={!enabled}
                            />
                            <input
                                type="time"
                                value={closing}
                                onChange={(e) => handleScheduleChange(day, 'closing', e.target.value)}
                                disabled={!enabled}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkingSchedule;
