import React from 'react';
import './button.styles.css'

export const DrumButton = (props) => {
    const node = React.useRef()

    const handlekeyDown = (e) => {
        if (e.keyCode === props.sound.keyCode){
            handleSound()
        } else {
            return;
        }
    }

    const handleSound = () => {
        if (props.poweredOff) {
            return;
        }
        console.log(props.volume)
        const sound = node.current
        sound.currentTime = 0
        sound.volume=props.volume
        sound.play()
    }

    React.useEffect(() => {
        document.addEventListener('keydown', handlekeyDown);
        return () => document.removeEventListener('keydown', handlekeyDown)
    }, [])

    return(
        <div 
            className='drum-button'
            onClick={handleSound}
        >
            <audio
                ref={node}
                src={props.sound.url}
            />
            <p>{props.sound.keyTrigger}</p>
        </div>
    )
}