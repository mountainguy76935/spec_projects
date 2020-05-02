import React from 'react';
import './tictactoe.styles.css'

export const TicTacToe = (props) => {
    const createRandomColor = () => {
        let num;
        let alpha = ['a', 'b', 'c', 'd', 'e', 'f']
        let answer = new Array(6);
        for (let i = 0; i<answer.length; i++) {
          num = Math.floor(Math.random()*15);
          if (num < 10) {
            answer[i] = num
          } else {
            num = num-10;
            answer[i] = alpha[num];
          }
        }
        console.log(answer.join('').toString())
        return answer.join('').toString();
      }

    let mapArray = new Array(9).fill(9).map((a,i) => a-i).reverse();
    const [arr, setArr] = React.useState([...mapArray].fill(''))
    const [turn, setTurn] = React.useState(false)
    const [winner, setWinner] = React.useState('')
    const [color, setColor] = React.useState('#'+createRandomColor())

    const reset = (winningLetter) => {
        props.handleReset(winningLetter);
        let newFirst = winningLetter === 'X' ? false : true
        setTurn(newFirst)
        setArr([...mapArray].fill(''));
        setWinner('');
        setColor('#'+createRandomColor())
    }

    const handleClick = (index, letter) => {
        let newArr = arr;
        if (newArr[index] === 'X' || newArr[index] === 'O') {
            return;
        }
        newArr.splice(index, 1, turn ? 'X' : 'O')
        setTurn(!turn);
        setArr(newArr);
        if (newArr.join('').length === 9) {
            setWinner('cat');
            return;
        }
        let testArr = [newArr.slice(0, 3), newArr.slice(3, 6), newArr.slice(6, 9)];
        let testInd = index%3;
        let win = false;
        if (testArr[0][testInd] === letter && testArr[1][testInd] === letter && testArr[2][testInd] === letter) {
            win = true;
        };
        if (testArr[0].join('') === `${letter}${letter}${letter}` || testArr[1].join('') === `${letter}${letter}${letter}` || testArr[2].join('') === `${letter}${letter}${letter}`) {
            win = true;
        };
        if (testArr[0][0] && testArr[0][0] === testArr[1][1] && testArr[1][1] === testArr[2][2]) {
            win = true
        };
        if (testArr[2][0] && testArr[2][0] === testArr[1][1] && testArr[1][1] === testArr[0][2]) {
            win = true
        };
        if (win) {
            setWinner(letter)
            props.handleWin(letter)
        }
    }

    return(
        <div className='grid'>
            {mapArray.map((a,i) => {
            return(
                <React.Fragment>
                    <div 
                        className='blocks'
                        style={{
                            backgroundColor: color
                        }}
                        onClick={() => handleClick(i, turn ? 'X' : 'O')}
                        key = {i+1}
                    >
                        <p>{arr[i]}</p>
                    </div>
                </React.Fragment>
            )
            })}
        {winner ? 
        <React.Fragment>
            <div className='win_prev'></div>
            <div className='winner_block'>
                {winner === 'cat' ? "Cat's Game!!": `${winner} is the winner!`}
                <button onClick={() =>reset(winner)}>play again?</button>
            </div>
        </React.Fragment> : 
        null}
        </div>
    )
}