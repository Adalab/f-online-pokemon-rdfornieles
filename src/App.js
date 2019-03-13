import React, { Component } from 'react';
import './App.css';
import { callApi } from './components/Services/PokeApi';
import PokeList from './components/PokeList';
import SearchText from './components/SearchText';
import PokemonLogo from './images/PokemonLogo.png';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: [],
      name: ""
    }

    this.getValue = this.getValue.bind(this);
    this.filterName = this.filterName.bind(this);
  };

  componentDidMount(){
    this.callApiPokemon()
  }

  callApiPokemon() {
    callApi().then(data => {
      //console.log(data.results);
      //map para sacar la url que me da la api
      const urlPoke = data.results.map(item => {
        return item.url;
      });
      //for y fetch para que me de la info de la url
      for (let i = 0; i < urlPoke.length; i++) {
        fetch(urlPoke[i])
          .then(response => response.json())
          .then(dataUrl =>{
            //arr vacío para meter los tipos con el siguiente for
            const typePoke = [];
            for (let i = 0; i < dataUrl.types.length; i++) {
              typePoke.push(dataUrl.types[i].type["name"]);
            }
            //const para meter todos los datos que quiero pintar
            const Pokemon = {
              name: dataUrl.name,
              id: dataUrl.id,
              img: dataUrl.sprites.front_default,
              type: typePoke
            }
            
            //push para meter la info en el estado
            const Pokemons = this.state.poke;
            Pokemons.push(Pokemon);
            Pokemons.sort((a,b) => a.id - b.id)
            this.setState({
              poke: Pokemons
            })

          })
      }
    })
  }

  getValue(e) {
    const nameValue = e.currentTarget.value;
    this.setState({
      name: nameValue
    })
  }

  filterName(){
      return this.state.poke.filter(item =>{
      const pokeName = item.name;
      return pokeName.includes(this.state.name.toLowerCase());
    });
  }


  render() {
    return (
      <div className="App">
        <header>
          <img className = "title-app" src = {PokemonLogo} alt = "Logo Pokemon"/>
          <SearchText
            getValue={this.getValue}
            valueName={this.state.name}
          />
        </header>

        <main>
          <PokeList listPoke = {this.filterName()}/>
        </main>

      </div>
    );
  }
}

export default App;
