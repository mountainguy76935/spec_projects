import React from 'react';
import './25-5-clock.styles.css';
import { ClockContainer } from '../components/clock_files/clock-container/clock-container.component';

export const ClockPage = () => {
    return(
        <div className="clock-page">
            <ClockContainer />
        </div>
    )
}