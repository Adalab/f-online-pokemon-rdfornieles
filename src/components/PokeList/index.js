import React, { Component } from 'react';
import './PokeList.scss';

class PokeList extends Component {
    
    render() { 
        const { listPoke } = this.props
        console.log('holi',listPoke);
        return ( 
            <div>
                { <ul>
                    {listPoke.map(item => {
                        return (
                            <li key = {item.id}>
                            <h2>{item.name}</h2>
                            <img src = {item.img} alt = "Imagen Pokemon"/>
                            </li>
                        )
                    })}
                </ul> }
            </div>
         );
    }
}
 
export default PokeList;