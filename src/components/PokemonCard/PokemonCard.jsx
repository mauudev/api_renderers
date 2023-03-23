const PokemonCard = ({ pokemonData }) => {
    if (!pokemonData || pokemonData === null) return null;

    return (
        <div className="pokemon-info">
            <h1>Pokemon Information</h1>
            <p><b>Name: </b>{pokemonData.name}</p>
            <p><b>Order: </b>{pokemonData.order}</p>
            <p><b>Weight: </b>{pokemonData.weight}</p>
            <p><b>Height: </b>{pokemonData.height}</p>
            <p><b>Avatar: </b></p>
            <img className="pokemon-avatar" src={pokemonData.sprites.back_default} />
        </div>
    );
};

export default PokemonCard;