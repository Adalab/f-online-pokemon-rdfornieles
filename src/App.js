import React, { Component } from "react";
import "./App.css";
import { callApi } from "./Services/PokeApi";
import PokeList from "./components/PokeList";
import SearchText from "./components/SearchText";
import PokemonLogo from "./images/PokemonLogo.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: [],
      pokeEvolution: [],
      name: ""
    };

    this.getValue = this.getValue.bind(this);
    this.filterName = this.filterName.bind(this);
  }

  componentDidMount() {
    this.callApiPokemon();
  }

  callApiPokemon() {
    callApi().then(data => {
      const urlPoke = data.results;
      //console.log('mmmm', urlPoke)
      const newUrlPoke = urlPoke.map(item => {
        return fetch (item.url)
        .then(response => response.json())
      });
      
      Promise.all(newUrlPoke)
        .then(Pokemons => {
          console.log('ttt',Pokemons)
          this.setState({
            poke: Pokemons
          })
        });
    });

    const evoPokes = this.state.poke.map(item =>{
      return fetch (item.species.url)
      .then(response => response.json())
    })

    Promise.all(evoPokes)
    .then(item =>{
      console.log('jpder', item)
      this.setState({
        pokeEvolution: item
      })
    })
    
  }

  // getEvoPoke(){
  //    const evoPokes = this.state.poke.map(item =>{
  //      return fetch (item.species.url)
  //      .then(response => response.json())
  //    })

  //    Promise.all(evoPokes)
  //    .then(item =>{
  //      console.log('jpder', item)
  //     //  this.setState({
  //     //    pokeEvolution: item
  //     //  })
  //    })
  // }

  getValue(e) {
    const nameValue = e.currentTarget.value;
    this.setState({
      name: nameValue
    });
  }

  filterName() {
    //console.log('kkk', this.state.poke)
    return this.state.poke.filter(item => {
      const pokeName = item.name;
      return pokeName.includes(this.state.name.toLowerCase());
    });
  }

  render() {

    const { pokeEvolution, poke } = this.state
    console.log('a ver..', poke)
    return (
      <div className="App">
        <header>
          <img className="title-app" src={PokemonLogo} alt="Logo Pokemon" />
          <SearchText getValue={this.getValue} valueName={this.state.name} />
        </header>

        <main>
          <PokeList 
          listPoke={this.filterName()}
          />
        </main>
      </div>
    );
  }
}

export default App;
