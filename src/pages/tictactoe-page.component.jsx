import React from 'react';
import { TicTacToe } from '../components/tictactoe-files/tictactoe.component'

export const TicTacToePage = () => {
    const [scoreO, setScoreO] = React.useState(0);
    const [scoreX, setScoreX] = React.useState(0);
    const [first, setFirst] = React.useState('O');

    const handleWin = (val) => {
        console.log('val', val)
        let scoreOtemp = scoreO + 1;
        let scoreXtemp = scoreX + 1;
        val === 'O' ? setScoreO(scoreOtemp) : setScoreX(scoreXtemp)
    }

    const handleReset = (letter) => {
        let temp = letter === 'O' ? 'X' : 'O';
        setFirst(temp)
    }

    return (
        <React.Fragment>
            <h1>player X: {scoreX} player O: {scoreO}</h1>
            <h2>{first} goes first!</h2>
            <TicTacToe handleWin={handleWin} handleReset={handleReset}/>
        </React.Fragment>
    )
}