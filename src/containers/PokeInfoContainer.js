import React,{ Component } from 'react';
import PokeDescription from "../components/PokeDescription";
import AppNav from "../components/AppNav";

// Imports Externos
import axios from "axios";

class PokeInfoContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			pokemonDescription: "",
			pokeName: "",
			pokeId: "",
		};

	}
	
	componentDidMount() {
		// peticion con axios
		const { match } = this.props;
		const pokeId = match.params.pokeIndex;
		const pokeName = match.params.pokeName;
		const pokeDescriptionUrl = `${process.env.REACT_APP_POKE_API_BASE_URL}pokemon-species/${pokeId}/`;
		axios.get(pokeDescriptionUrl)
		.then(res =>{
			const { flavor_text_entries } = res.data;
			this.setState({
				pokemonDescription: flavor_text_entries[11].flavor_text,
				pokeName,
				pokeId
			});
		})
	}
	
	render() {
		let url = `${process.env.REACT_APP_POKEMON_ART}`;
		const { pokemonDescription, pokeName, pokeId } = this.state;
		
		return (
			<>
				<AppNav />
				<PokeDescription 
					name={pokeName} 
					pokeImage={`${url}${pokeId}.png?raw=true`} 
					description={pokemonDescription} 
				/>
			</>
		);
	}

}

export default PokeInfoContainer;