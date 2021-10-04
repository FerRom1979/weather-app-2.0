import React from 'react';
import { getIcons } from '../../utils/get-icons';

import './styles.css';

export const ButtonSwitch = ({ setDegrees }) => {
    const handleChecked = (e) => {
        if (e.target.checked) {
            setDegrees('imperial');
        } else {
            setDegrees('metric');
        }
    };
    return (
        <div>
            <span className="celsius">{getIcons('metric', 100, '#fff')}</span>
            <label htmlFor="input" className="switch">
                <input type="checkbox" id="input" name="input" onChange={handleChecked} />
                <span className="slider"></span>
            </label>
            <span className="fahrenheit">{getIcons('imperial', 100, '#fff')}</span>
        </div>
    );
};
