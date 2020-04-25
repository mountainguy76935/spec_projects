import React from 'react';
import { Navigation } from './components/navigation_files/navigation/navigation.component'
import { DailyPicture } from './pages/daily-picture.component';
import { Route } from 'react-router-dom';
import { CalcApp } from './pages/calculator-page.component';
import { QuotePage } from './pages/quote-page.component'
import './App.css';
import './index.css';

const App = () => {
    return (
        <div className='App'>
          <Navigation/>
          <Route exact path='/daily_pic' component = { DailyPicture } />
          <Route exact path='/calculator' component = { CalcApp } />
          <Route exact path='/quote' component = { QuotePage } />
        </div>
    );
}

export default App;
