import React, { Component } from 'react';
import './PokemonCard.scss';


class PokemonCard extends Component {
    render() { 
        return ( 
            <li className="pokemon"  id={this.props.pokeItem.id}>
            <h2 className="poke-name">{this.props.pokeItem.name}</h2>
            <span className="poke-id_container">
              <p className="poke-id">ID: {this.props.pokeItem.id}</p>
            </span>
            <img
              className="poke-img"
              src={this.props.pokeItem.sprites.front_default}
              alt={`Imagen ${this.props.pokeItem.name}`}
            />
            <div className="poke-type_container">
              {this.props.pokeItem.types.map((item, index) => {
                return (
                  <p className="poke-type" key={index}>
                    {item.type.name}
                  </p>
                );
              })} 
            </div>
            
            <div>

              
              {/* {evoPokes.map((item, index) =>{
                if(item === null){
                  return <p key={index}>No evoluciona de nadie</p>
                }else {
                  return <p key={index}>{item.name}</p>
                }
              })} */}

            </div>
          </li>
         );
    }
}
 
export default PokemonCard;