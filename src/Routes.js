import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PokeListContainer from './containers/PokeListContainer';
import PokeInfoContainer from './containers/PokeInfoContainer';

const Routes = () => {
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/pokemons' component={PokeListContainer} />
      <Route exact path="/poke-info/:pokeIndex/:pokeName" component={PokeInfoContainer} />
    </Switch>
  );
}

export default Routes;