import React from 'react';
import { DrumMachineContainer } from '../components/drum_machine_files/container/container.component';
import './drum-machine.styles.css'

export const DrumMachinePage = () => {
    return (
        <div className="drum-machine-page">
            <DrumMachineContainer />
        </div>
    )
}