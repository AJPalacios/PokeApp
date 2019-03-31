import React from 'react';
import PokeCard from "./PokeCard";
import Grid from '@material-ui/core/Grid';


function PokeDescription ({ pokeImage, name }) {
	return(
			<Grid container>
				<PokeCard image={pokeImage} name={name} />
			</Grid>
	);
}


export default PokeDescription;