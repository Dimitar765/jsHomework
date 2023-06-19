import { Component } from "react";
import Character from "../Character/Character";
import "./CharacterPage.css"


class CharacterPage extends Component {
    url = 'https://swapi.dev/api/people';
    
    constructor(props){
        super(props)
    
    this.state = {
        characters: []
        
    }
    
    
}


componentDidMount = async () =>{
    const res = await fetch(this.url);
    const data = await res.json();
    // console.log(data.results);
    
    this.setState({
        characters: data.results,
    }) 

    
    }


    render(){
        return(
            <>
            {/* <h1>test</h1> */}
            {
                this.state.characters.length === 0 ? (
                    <h3>loading...</h3>
                ) : (
                   <div className="characters">
                        {this.state.characters.map((character)=>{
                          return  <Character key={character.id} characterProps = {character}/>                                
                        })}
                        </div>
                )
            }
            </>
        )
    }
}

 
            export default CharacterPage