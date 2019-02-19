import React, {Component} from 'react';

class TemperatureInput extends Component{
    constructor(){
        super()
        this.state = {
            temperature: '',
            msg: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        if(event.target.value.match(/^\d*$/)){
            // console.log('only numbers')
            this.setState({
                temperature: event.target.value
            })
        } else {
            // console.log('fail')
            this.setState({
                msg: 'Must enter only numbers'
            })
        }
        // const reg = new RegExp(/^\d+$/);
        
    }

    render(){
        return (
            <div>
                {this.state.msg}
                <legend>Scale: </legend>
                <input onChange={this.handleChange} value={this.state.temperature}/>
            </div>
        )
    }
}

export default TemperatureInput