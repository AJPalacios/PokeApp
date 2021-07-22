import React,{Fragment} from 'react';
import PokeCard from './PokeCard';
import { Grid } from '@material-ui/core';



function List({ pokedata }) {
  return(
    <Fragment>
        <Grid container justify="center">
        {pokedata.map((pokemon, index) => {
            
          let url = `${process.env.REACT_APP_POKE_NEW_ART_INSIDE_API}`
          let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2]
          
          return <PokeCard key={index} to={`/poke-info/${pokeIndex}/${pokemon.name}`} name={pokemon.name} image={`${url}${pokeIndex}.png?raw=true`}/>
        })}
      </Grid>
    </Fragment>
  );
}

export default List;