import React from 'react';
import './button.styles.css'

export const DrumButton = (props) => {

    const node = React.useRef()

    const handlekeyDown = (e) => {
        e.preventDefault();
        if (e.keyCode === props.sound.keyCode){
            handleClick()
        } else {
            return;
        }
    }

    const handleClick = () => {
        if (props.poweredOff) {
            return;
        }
        const sound = node.current
        sound.currentTime = 0
        sound.volume=props.volume
        sound.play()
    }

    React.useEffect(() => {
        window.addEventListener('keydown', handlekeyDown);
        return () => window.removeEventListener('keydown', handlekeyDown)
    }, [])

    return(
        <div 
            className='drum-button' 
            onClick={handleClick}
        >
            <audio
                ref={node}
                src={props.sound.url}
            />
            <p>{props.sound.keyTrigger}</p>
        </div>
    )
}