import React, { Component } from "react";
import "./App.css";
import { callApi } from "./Services/PokeApi";
import PokeList from "./components/PokeList";
import SearchText from "./components/SearchText";
import PokemonLogo from "./images/PokemonLogo.png";
import { Route, Switch } from 'react-router-dom';
import DetailCard from './components/DetailCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poke: [],
      pokeEvolution: [],
      name: "",
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
          //console.log('ttt',Pokemons)
          this.setState({
            poke: Pokemons
          })

          const evoPokes = this.state.poke.map(item =>{
            return fetch (item.species.url)
            .then(response => response.json())
          })

          Promise.all(evoPokes)
          .then(item =>{
            const newItem = []
            console.log('vennnga', newItem)
            item.map(evoFrom =>{
              return newItem.push(evoFrom.evolves_from_species)
            })
            this.setState({
              pokeEvolution: newItem
            })
          })

        });  
    });
  }

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
    const { pokeEvolution } = this.state
    return (
      <div className="App">
        <header>
          <img className="title-app" src={PokemonLogo} alt="Logo Pokemon" />
          <Switch>
            <Route exact path="/" render={() =>
            <SearchText 
            getValue={this.getValue} 
            valueName={this.state.name}
            />}
            />
          </Switch>
          
        </header>

        <main>
          <Switch>
            <Route exact path="/" render= {() =>
            <PokeList 
            listPoke={this.filterName()}
            //evoPokes={pokeEvolution}
            />}
            />
            {/* <Route path="/poke/:id" render= {props =>
            <DetailCard 
            pokemons={this.state.poke}
            props={props.match}
            /> */}
            
            }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
