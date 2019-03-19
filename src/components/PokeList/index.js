import React, { Component } from "react";
import "./PokeList.scss";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import PokemonCard from '../PokemonCard';

class PokeList extends Component {

  render() {
    const { listPoke, evoPokes } = this.props;
    //console.log('evopokesmmm',evoPokes)
    return (
      <div>
        {
          <ul className="poke-list">
            {listPoke.map((item, index) => {
              return (
              <Link className="pokeLink" to={`/listPoke/${item.id}`} key={index}>
              <PokemonCard pokeItem={item} key={index}/>
              </Link>
              );
            })}
          </ul>
        }
      </div>
    );
  }
}

PokeList.propTypes = {
  listPoke: PropTypes.array.isRequired
};

export default PokeList;
