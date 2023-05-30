import './SingleGameDetailsCardThreeGames.css'

const SingleGameDetailsCardThreeGames = ({convertedGames}) => {
    const slicedGames = convertedGames.slice(0, 3)

    return (
        <div className="three-games-card-container">
          {convertedGames &&
          slicedGames &&
          slicedGames.map((game, index) => (
            <div key={index} className="three-games-card">
              <img src={game.preview} alt={game.name} className="three-games-card-image" />
              <p className="three-games-card-name">{game.name}</p>
              <p className="three-games-card-price">{game.price}</p>
            </div>
          ))}
        </div>
      );
}

export default SingleGameDetailsCardThreeGames
