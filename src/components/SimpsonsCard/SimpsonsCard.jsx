const SimpsonsCard = ({ quoteData }) => {
    if(!quoteData || quoteData === null) return null;

    return (
        <div className='quote-info'>
            <h2 className="quote-author">{quoteData.character}</h2>
            <div className="quote" style={{border: '1px solid'}}>
                <p style={{ fontStyle: 'italic', fontSize: '30px' }}>{quoteData.quote}</p>
                <img src={quoteData.image} height="300px" width="200px"/>
            </div>
        </div>
    )
}

export default SimpsonsCard;