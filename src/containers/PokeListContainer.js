import React,{ Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';

class PokeListContainer extends Component {

  state ={
    pokeData: [],
    next: "",
    previous: ""
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      const { results, next, previous} = res.data;

      this.setState({
        pokeData: results,
        next,
        previous
      })

    })
    .catch(error =>{
      console.log(error);
    })
  }

  nextPage = () => {
    const { next } = this.state;
    axios.get(next)
    .then(r => {
      const { results, next, previous} = r.data;
      this.setState({
        pokeData: results,
        next,
        previous
      })
    })
  }

  previousPage = () => {
    const { previous } = this.state;
    axios.get(previous)
    .then(r => {
      const { results, next, previous} = r.data;
      this.setState({
        pokeData: results,
        next,
        previous
      })
    })
  }

  render() {
    const { pokeData } = this.state;

    return(
      <>
        <AppNav />
        <button onClick={this.previousPage}>Anterior</button>
        <button onClick={this.nextPage}>Siguiente</button>
        <List pokedata={pokeData} />
      </>
    );
  }
}

export default PokeListContainer;