import { useState } from 'react';
import './s.css';
import Moon from '../../img/moon.svg';

export const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`switch ${isOn ? 'off' : 'on'}`} onClick={toggleSwitch}>
            <div className="switch-circle">
                {isOn ? (
                    <span role="img" aria-label="sun">️</span>
                ) : (
                    <span role="img" aria-label="moon"><img src={Moon} alt=""/></span>
                )}
            </div>
        </div>
    );
};