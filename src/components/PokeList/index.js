import React, { Component } from 'react';
import './PokeList.scss';
import PropTypes from 'prop-types';

class PokeList extends Component {
    
    render() { 
        const { listPoke } = this.props
        //console.log('holi',listPoke);
        return ( 
            <div>
                { <ul className = "poke-list">
                    {listPoke.map((item, index) => {
                        return (
                            <li className = "pokemon" key = {index} id = {item.id}>
                            <h2 className = "poke-name">{item.name}</h2>
                            <img className = "poke-img" src = {item.img} alt = "Imagen Pokemon"/>
                            <p className = "poke-id">ID: {item.id}</p>
                            {item.type.map((item, index) => {
                                return (
                                    <span className= "poke-type" key = {index}>{item}</span>
                                )
                            })}
                            </li>
                        )
                    })}
                </ul> }
            </div>
         );
    }
}

PokeList.propTypes = {
    listPoke: PropTypes.array.isRequired
}
 
export default PokeList;