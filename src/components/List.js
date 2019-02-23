import React,{Fragment} from 'react';



function List({ pokedata }) {
  return(
    <Fragment>
      <h1>Lista de pokemons</h1>
      <ul>
        {pokedata.map((pokemon, index) => {
          return (
          <li key={index}>
            {pokemon.name}
          </li>
          );
        })}
      </ul>
    </Fragment>
  );
}

export default List;