import React,{ Component } from 'react';
import axios from 'axios';
import List from '../components/List';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

class PokeListContainer extends Component {

  state ={
    pokeData: []
  }

  componentDidMount() {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(res => {
      const {results} = res.data;

      this.setState({
        pokeData: results
      })

    })
    .catch(error =>{
      console.log(error);
    })
  }

  render() {
    const { classes } = this.props;
    const { pokeData } = this.state;

    return(
      <>
        <AppBar className={classes.NavColor} position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" component="p">PokeApp</Typography>
          </Toolbar>
        </AppBar>
        <List pokedata={pokeData} />
      </>
    );
  }
}

export default withStyles({
  NavColor:{
    backgroundColor: '#EF5350'
  }
})(PokeListContainer);