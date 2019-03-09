import React, { Component } from 'react';
import './SearchText.scss';

class SearchText extends Component {
   
    render() { 
        const { getValue, valueName } = this.props;

        return ( 
            <span>
                  <label htmlFor="name">Busca por nombre</label>
                    <input
                        className="input-name"
                        id="name"
                        onChange={getValue}
                        placeholder="Ejemplo: Pikachu"
                        type="text"
                        name="name"
                        value={valueName}
                    />
            </span>
         );
    }
}
 
export default SearchText;