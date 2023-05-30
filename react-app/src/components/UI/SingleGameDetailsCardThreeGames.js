import { useHistory } from 'react-router-dom';
import './SingleGameDetailsCardThreeGames.css'

const SingleGameDetailsCardThreeGames = ({convertedGames}) => {
    const history = useHistory()
    const slicedGames = convertedGames.slice(10, 12)

    return (
        <div className="three-games-card-container">
          {convertedGames &&
          slicedGames &&
          slicedGames.map((game, index) => (
            <div key={index} className="three-games-card">
              <img src={game.preview} alt={game.name} className="three-games-card-image"
                onClick={() => history.push(`/games/${game.id}`)}
              />
              <p style={{fontSize: '12px', color: 'gray'}}>Base Game</p>
              <p className="three-games-card-name">{game.name}</p>
              <p className="three-games-card-price">${game.price}</p>
            </div>
          ))}
        </div>
      );
}

export default SingleGameDetailsCardThreeGames
