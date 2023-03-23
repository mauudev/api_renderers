const StarWarsCard = ({ characterData }) => {
    if (!characterData || characterData === null) return null;

    return (
        <div className="character-info">
            <h2>Character Information</h2>
            <p>Name: {characterData.name}</p>
            <p>Height: {characterData.height}</p>
            <p>Mass: {characterData.mass}</p>
            <p>Hair color: {characterData.hair_color}</p>
            <p>Skin color: {characterData.skin_color}</p>
            <p>Eye color: {characterData.eye_color}</p>
            <p>Birth: {characterData.birth}</p>
            <p>Gender: {characterData.gender}</p>
        </div>
    )
}

export default StarWarsCard;