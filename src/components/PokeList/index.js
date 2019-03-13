import React, { Component } from 'react';
import './PokeList.scss';
import PropTypes from 'prop-types';

class PokeList extends Component {
    
    render() { 
        const { listPoke } = this.props;
    
        return ( 
            <div>
                { <ul className = "poke-list">
                    {listPoke.map((item, index) => {
                        return (
                            <li className = "pokemon" key = {index} id = {item.id}>
                            <h2 className = "poke-name">{item.name}</h2>
                            <span className = "container-id">
                                <p className = "poke-id">ID: {item.id}</p>
                            </span>
                            <img className = "poke-img" src = {item.img} alt = "Imagen Pokemon"/>
                            <div className = "container-type" >
                                {item.type.map((item, index) => {
                                return (
                                    <p className= "poke-type" key = {index}>
                                    {item}
                                    </p>
                                )
                            })}
                            </div>
                           
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