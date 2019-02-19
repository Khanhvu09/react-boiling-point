import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

class TemperatureApp extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id="temp-app">
                <TemperatureInput />
                <TemperatureInput />
                <BoilingVerdict />
            </div>
        )
    }
}

export default TemperatureApp