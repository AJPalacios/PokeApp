import React,{Fragment} from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';



function List({ pokedata }) {
  return(
    <Fragment>
      <h1>Lista de pokemons</h1>
        <Grid container spacing={24} justify="center">
        {pokedata.map((pokemon, index) => {
            
          let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
          let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
          
          return <PokeCard name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`}/>
        })}
      </Grid>
    </Fragment>
  );
}

export default List;