import React from 'react';
import { DrumMachineContainer } from '../components/drum_machine_files/container/container.component';
import './drum-machine.styles.css'

export const DrumMachinePage = () => {
    const [volume, setVolume] = React.useState(.3);

    return (
        <div className="drum-machine-page">
            <DrumMachineContainer volume={volume} setVolume={setVolume}/>
        </div>
    )
}