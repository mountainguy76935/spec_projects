import React from 'react';
import './navigation.styles.css';
import { Link } from 'react-router-dom';
import { Hamburger } from '../hamburger/hamburger.component'

export const Navigation = (props) => {
    const [toggled, setToggled] = React.useState(false)
    const pages = [
                {
                    title: 'Calculator',
                    path: '/calculator'
                },
                {
                    title: 'Nasa Picture',
                    path: '/daily_pic'
                },
                {
                    title: 'Simpsons Quote',
                    path: '/quote'
                },
                {
                    title: 'Weather',
                    path: '/weather'
                },
                {
                    title: 'Tic Tac Toe',
                    path: '/tictactoe'
                }
            ]

    const handleClick = () => {
          setToggled(!toggled)
    }

    let row = toggled ? 'row' : 'row1';
    return (
        <React.Fragment>
            <Hamburger 
                handleClick={handleClick} 
                toggled={toggled}
            />
            <div className = {row}> 
            {pages.map(a => {
                return (
                    <span className="hov">
                        <Link 
                            className={
                                toggled ? 
                                'linkClass' : 
                                'linkClass active'
                            } 
                            to={a.path} 
                            onClick={
                                !toggled ? 
                                (event) => event.preventDefault() : 
                                null
                            }>
                            {a.title}
                        </Link>
                    </span>
                )
            })}
            </div>
        </React.Fragment>
    )
}