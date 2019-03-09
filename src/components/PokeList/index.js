import React, { Component } from 'react';
import './PokeList.scss';
import PropTypes from 'prop-types';

class PokeList extends Component {
    
    render() { 
        const { listPoke } = this.props
        //console.log('holi',listPoke);
        return ( 
            <div>
                { <ul>
                    {listPoke.map((item, index) => {
                        return (
                            <li key = {index} id = {item.id}>
                            <h2>{item.name}</h2>
                            <p>ID: {item.id}</p>
                            <img src = {item.img} alt = "Imagen Pokemon"/>
                            {item.type.map((item, index) => {
                                return (
                                    <span key = {index}>{item}</span>
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