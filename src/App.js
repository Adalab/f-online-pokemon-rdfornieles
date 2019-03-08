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
      //map para sacar la url que me da la api
      const urlPoke = data.results.map(item => {
        return item.url;
      });
      //for y fetch para que me de la info de la url
      for (let i = 0; i < urlPoke.length; i++) {
        fetch(urlPoke[i])
          .then(response => response.json())
          .then(dataUrl =>{
            console.log(dataUrl);

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
            console.log(Pokemon)

            this.setState({
              repo: Pokemon
            })

          })
      }
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
          <PokeList listPoke = {this.state.repo}/>
        </main>

      </div>
    );
  }
}

export default App;
