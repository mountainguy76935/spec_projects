import React from 'react';
import './weather-app.styles.css'

export class WeatherApp extends React.Component{
    constructor() {
        super();
        this.state = {
            data: {},
            loaded: false,
            clicked: false
        }
    }

    handleFar = (val) => {
        return Math.floor(((val*9)/5)+32)
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    componentDidMount() {
        const errorCallback = (err) => {
            console.log('err', err)
            return err
        }
    
        const getData = () => {
            navigator.geolocation.getCurrentPosition(successCallback,errorCallback,{timeout:10000})
            return true
        }
        const successCallback = (pos) => {
            let latitude = pos.coords.latitude.toString();
            let longitude = pos.coords.longitude.toString();
            console.log(latitude, longitude)
            fetch('https://fcc-weather-api.glitch.me//api/current?lon=' +longitude+'&lat=' +latitude)
                    .then(res => res.json())
                    .then(data => this.setState({data: data}))
                    .then(() => this.setState({loaded: true}))
                    .catch(err => console.log(err))
            return true
        }
        getData();
    }

    render() {
        let data = this.state.data
        let loaded = this.state.loaded
        return(
            <div className='weather_app'>
                <h1 className='title'>Weather App</h1>
            <p className='city'>{!loaded ? 'loading' : data['name']}</p>
                <span>
                    <p className='temperature'>{!loaded ? 'loading' : !this.state.clicked ? Math.floor(data['main']['temp']) : this.handleFar(data['main']['temp'])}</p>
                    <button 
                        className='temp-button' 
                        onClick = {this.handleClick}
                        >
                            {!this.state.clicked ? 'make Fahrenheit' : 'make Celsius'}
                    </button>
                </span>
                <p className='weather'>{!loaded ? 'loading' : data['weather'][0]['description']}</p>
                <img 
                    className='weather-image' 
                    src={!loaded ? '' : data['weather'][0]['icon']}
                    width='50px'
                    height='50px'
                    alt='the weather'/>
            </div>
        )
    }
}