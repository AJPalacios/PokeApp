import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

function PokeCard({ name, classes, image, to='' }) {
	return(
		<Card className={classes.item}>
			<CardMedia className={classes.media} image={image}/>
			<CardContent>
				<Link to={to}><Typography component="p" variant="h6">{name}</Typography></Link>
			</CardContent>
		</Card>
	);
}

export default withStyles({
	item:{
		minWidth: "350px",
		textAlign: "center",
		margin: "2em",
		padding: '1em'
	},
	media:{
		minHeight: "350px"
	}
})(PokeCard);