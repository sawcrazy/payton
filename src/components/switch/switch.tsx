import { useState } from 'react';
import './s.css';

export const Switch = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`switch ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
            <div className="switch-circle">
                {isOn ? (
                    <span role="img" aria-label="sun">☀️</span>
                ) : (
                    <span role="img" aria-label="moon">🌙</span>
                )}
            </div>
        </div>
    );
};