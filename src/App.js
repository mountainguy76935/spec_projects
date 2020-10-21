import React from 'react';
import { Navigation } from './components/navigation_files/navigation/navigation.component'
import { DailyPicture } from './pages/daily-picture.component';
import { Route } from 'react-router-dom';
import { CalcApp } from './pages/calculator-page.component';
import { QuotePage } from './pages/quote-page.component'
import { Weather } from './pages/weather-page.component'
import { WelcomePage } from './pages/welcome-page.component'
import { TicTacToePage } from './pages/tictactoe-page.component'
import { DrumMachinePage } from './pages/drum-machine-page.component';
import { ClockPage } from './pages/25-5-clock-page.component'
import './App.css';
import './index.css';

const App = () => {
    return (
        <div className='App'>
          <Navigation/>
          <Route exact path='/' component = { WelcomePage } />
          <Route exact path='/weather' component = { Weather } />
          <Route exact path='/daily_pic' component={ DailyPicture } />
          <Route exact path='/calculator' component={ CalcApp } />
          <Route exact path='/quote' component = { QuotePage } />
          <Route exact path='/tictactoe' component = { TicTacToePage } />
          <Route exact path='/drum_machine' component = { DrumMachinePage } />
          <Route exact path='/clock' component = { ClockPage } />
        </div>
    );
}

export default App;
