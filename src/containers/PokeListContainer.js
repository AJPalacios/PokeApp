import React,{ Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import AppNav from '../components/AppNav';
import Pagination from '../components/Pagination';

class PokeListContainer extends Component {

  state ={
    pokeData: [],
    currentOffset: 0,
    pageCounter: 1,
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps,prevState) {
    const { currentOffset } = this.state;
    if (currentOffset !== prevState.currentOffset) {
      if (currentOffset < 0 ) {
        this.setState({
          currentOffset: 0,
          pageCounter: 1,
        });
        this.fetchData(prevState.currentOffset);
      }
      this.fetchData(currentOffset);
    }
  }

  fetchData = (offset = 0) => {
    const url = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon`;
    let params = {
      offset: offset,
      limit: 20
    }
    axios.get(url, { params })
    .then(res => {
      const { results } = res.data;

      this.setState({
        pokeData: results,
      })

    })
    .catch(error =>{
      console.log(error);
    })
  }

  increment= () => {
    const { currentOffset, pageCounter } = this.state;
    this.setState({
      currentOffset: currentOffset + 20,
      pageCounter: pageCounter + 1,
    });
  }

  decrement= () => {
    const { currentOffset, pageCounter } = this.state;
    this.setState({
      currentOffset: currentOffset - 20,
      pageCounter: pageCounter - 1,
    });
  }
  

  render() {
    const { pokeData, pageCounter } = this.state;

    return(
      <>
        <AppNav />
        <Pagination 
          increment={this.increment} 
          decrement={this.decrement} 
          page={pageCounter} 
        />
        <List pokedata={pokeData} />
      </>
    );
  }
}

export default PokeListContainer;