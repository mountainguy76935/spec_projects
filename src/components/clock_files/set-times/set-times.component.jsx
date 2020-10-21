import React from 'react';
import './set-times.styles.css'

export const SetTimes = (props) => {

    const handleArrowUp = () => {
        if (props.time >= 1) {
            props.setTime(props.time + 1)
            props.handleReset()
        }
        return;
    }

    const handleArrowDown = () => {
        if (props.time > 1) {
            props.setTime(props.time - 1)
            props.handleReset()
        }
        return;
    }

    return (
        <div className='set-times-container'>
            <h3>{props.text}</h3>
            <div className="set-time-display">
                <i className="fa fa-arrow-up" onClick={handleArrowUp}></i>
                <p>{props.time}</p>
                <i className="fa fa-arrow-down" onClick={handleArrowDown}></i>
            </div>
        </div>
    )
}