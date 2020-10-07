import React from 'react';
import './custom-toggle.styles.css'

export const CustomToggle = (props) => {
    const [toggled, setToggled] = React.useState(false)

    const handleToggle = () => {
        props.handleToggle(!toggled)
        setToggled(!toggled)
    }

    return (
        <React.Fragment>
            <h6>{props.name}</h6>
            <div className='custom-toggle' onClick={handleToggle}>
                <div className={toggled ? 'toggled active': 'toggled'}>

                </div>
            </div>
        </React.Fragment>
    )
}