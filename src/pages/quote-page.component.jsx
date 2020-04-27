import React from 'react';
import './quote-page.styles.css';
import { Quote } from '../components/quote_files/quote/quote.component'

export class QuotePage extends React.Component {
  constructor() {
    super();
    this.state= {
        info: {},
        loaded: false, 
        color: ''
    }
}

handleChange = () => {
    let arr = new Array(9).fill(9).map((a,i) => (a-i).toString()).concat(['a', 'b', 'c', 'd', 'e', 'f']);
    arr = '#'+new Array(6).fill('').map(a => arr[Math.floor(Math.random()*15)].toString()).join('')
    return fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                info: data,
                color: arr
            })
        })
        .then(() => {
            this.setState({
                loaded: true
            })
          })
        .then(data => console.log(this.state.info))
        .catch((err) => console.log(err))
      }

      handleClick = (e) => {
        e.preventDefault()
        this.handleChange()
    }

  render() {
    return (
      <div className="quote-page" style={{backgroundColor: this.state.color}}>
          <Quote 
            {...this.state.info[0]} 
            loaded={this.state.loaded}
            color={this.state.color} 
            handleChange={this.handleChange}
            handleClick={this.handleClick} 
          />
      </div>
    );
  }
}

