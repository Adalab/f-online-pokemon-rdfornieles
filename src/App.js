import React, { Component } from 'react';
import './App.css';
import { callApi } from './components/Services/PokeApi';
import PokeList from './components/PokeList';
import SearchText from './components/SearchText';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repo: [],
      name: ""
    }
  };

  componentDidMount(){
    this.callApiPokemon()
  }

  callApiPokemon() {
    callApi().then(data => {
      console.log(data.results);
      const urlPoke = data.results.map(item => {
        return console.log(item.url);
      })
    })
  }


  render() {
    return (
      <div className="App">
        <header>
          <h1>Pokemon App</h1>
          <SearchText />
        </header>

        <main>
          <PokeList />
        </main>

      </div>
    );
  }
}

export default App;
