import React from 'react';
import './button.styles.css'

export const DrumButton = (props) => {

    const node = React.useRef()

    const handleClick = () => {
        if (props.poweredOff) {
            return;
        }
        const sound = node.current
        sound.currentTime = 0
        sound.volume=props.volume
        sound.play()
    }

    return(
        <div className='drum-button' onClick={handleClick}>
            <audio
                ref={node}
                src={props.sound.url}
            />
            <p>{props.sound.id}</p>
        </div>
    )
}