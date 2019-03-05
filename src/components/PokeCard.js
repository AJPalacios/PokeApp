import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';

function PokeCard({ name, classes, image }) {
	return(
		<Card className={classes.item}>
			<CardMedia className={classes.media} image={image}/>
			<CardContent>
				<Typography component="p" variant="h6">{name}</Typography>
			</CardContent>
		</Card>
	);
}

export default withStyles({
	item:{
		minWidth: "300px",
		margin: "1em",
		textAlign: "center",
		boxSizing: "border-box"
	},
	media:{
		minHeight: "150px"
	}
})(PokeCard);