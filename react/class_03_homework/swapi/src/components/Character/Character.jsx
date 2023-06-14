import { Component } from "react";
import "./Character.css"


class Character extends Component {
    constructor(props){
        super(props)
            console.log(this.props.characterProps);

     
    }

    render(){

        return(
        <>
       
        <div className="card" >
        <div className="card-header">
        <h3>{this.props.characterProps.name}</h3>
        </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Height: {this.props.characterProps.height}</li>
                <li className="list-group-item">Gender: {this.props.characterProps.gender}</li>
                <li className="list-group-item">Born on: {this.props.characterProps.birth_year}</li>
            </ul>
        </div>
</>
            )
    }
}

export default Character;
// height, gender, and birth year