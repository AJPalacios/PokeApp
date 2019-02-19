import React from 'react';
import '../App.css';

const Home = () => {

    return(
      <div className="App">
        <header className="App-header">
          <img src={process.env.PUBLIC_URL + '/images/poke.png'} width='400' alt='poke' />
          <h1>Poke App</h1>
          <button>Ver Pokemons</button>
        </header>
      </div>
    );


}

export default Home;