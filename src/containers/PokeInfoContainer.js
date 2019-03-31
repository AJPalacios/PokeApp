import React,{ Component } from 'react';
import PokeDescription from "../components/PokeDescription";


class PokeInfoContainer extends Component {
	
	componentDidMount() {
		// peticion con axios
	}
	
	render() {
		const { match } = this.props;
		let url = "https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other-sprites/official-artwork/"
		const pokeId = match.params.pokeIndex;
		const pokeName = match.params.pokeName;
		
		return (
			<>
				<PokeDescription name={pokeName} pokeImage={`${url}${pokeId}.png?raw=true`} />
			</>
		);
	}

}

export default PokeInfoContainer;