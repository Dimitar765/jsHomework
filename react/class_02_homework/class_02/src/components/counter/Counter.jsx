import React from "react";
import './counter.css'

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            
        }
        
    }

    increment = () => {
        this.setState({
            number: this.state.number+1
        })
    }

    decrement = () => {
        this.setState({
            number: this.state.number-1
        })
    }

    reset = () => {
        this.setState({
            number:this.state.number = 0
        })
    }

    render(){
        if(this.state.number < 0)
        this.state.number = 0
    return(
        <div className="counter">
                <p>{this.state.number}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.reset}>Reset</button>
                <button onClick={this.decrement}>Decrement</button>
               

            </div>
        )
    }

}


export default Counter;