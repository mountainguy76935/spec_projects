import React from 'react';
import { SetTimes } from '../set-times/set-times.component';
import './clock-container.styles.css'

export const ClockContainer = () => {
    const [breakTime, setBreakTime] = React.useState(5);
    const [regularTime, setRegularTime] = React.useState(25);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [breakActive, setBreakActive] = React.useState(false)
    const [begin, setBegin] = React.useState(false)
    const [display, setDisplay] = React.useState('');
    const [ticking, setTicking] = React.useState(false)

    const nodeCurrent = React.useRef(currentTime)
    nodeCurrent.current = currentTime

    const nodeBreak = React.useRef(breakActive)
    nodeBreak.current = breakActive

    const nodeAudio = React.useRef(false)

    const convertTime = (value) => 60000*value

    const fullTime = (value, bool) => {
        value = bool ? 60000*value : value;
        let minutes = Math.floor(value / 60000)
        let seconds = (value/1000)-(60*minutes);
        return {minutes: minutes, seconds: seconds, val: value}
    }

    const convertDisplay = (min, sec) => `${min}:${sec < 10 ? '0' + sec : sec}`

    const handleCurrentTime = (time) => {
        const {minutes, seconds, val} = fullTime(time, true)
        if (!begin && !ticking) {
            setCurrentTime(val);
            setDisplay(convertDisplay(minutes, seconds))
        }
        if (begin && !ticking) {
            setTicking(true)
        } else if (!begin && ticking) {
            return
        }
    }

    const handleReset = () => {
        setBegin(false);
        setTicking(false);
        setBreakActive(false);
        const {minutes, seconds, val} = fullTime(regularTime, true)
        setCurrentTime(val);
        setDisplay(convertDisplay(minutes, seconds))
    }

    const startClock = (newCurrent, toBreak, thisFunction) => {
        newCurrent = newCurrent - 1000
        const {minutes, seconds} = fullTime(newCurrent, false)
        setCurrentTime(newCurrent);
        if (newCurrent === 0 && seconds === 0) {
            if (!toBreak) {
                let newTime = convertTime(breakTime);
                nodeAudio.current.play()
                setCurrentTime(newTime)
                setBreakActive(true)
            } else if (toBreak) {
                nodeAudio.current.play()
                window.clearInterval(thisFunction)
            }
        }
        setDisplay(convertDisplay(minutes, seconds));
        return;
    }

    React.useEffect(() => {
        handleCurrentTime(regularTime)
        let inter = window.setInterval(begin ? () => startClock(nodeCurrent.current, nodeBreak.current, inter) : () => null, 1000);
        return () => window.clearInterval(inter)
    }, [begin, regularTime])

    return (
        <div className='clock-container'>
            <h1>25+5 Clock</h1>
            <SetTimes
                time={breakTime}
                setTime={setBreakTime}
                handleReset={handleReset}
                text="Break Length"
            />
            <SetTimes
                time={regularTime}
                setTime={setRegularTime}
                handleReset={handleReset}
                text="Session Length"
            />
            <div className="clock-session">
                <h1>Session</h1>
                <h3>{display}</h3>
                <div className="session-controls">
                    <i className="fa fa-play" onClick={() => setBegin(true)}></i>
                    <i className="fa fa-pause" onClick={() => setBegin(false)}></i>
                    <i className="fa fa-undo" onClick={handleReset}></i>
                </div>
            </div>
            <audio
                ref={nodeAudio}
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            />
        </div>
    )
}