import { useHistory } from 'react-router-dom'
import './HomepageRegularCard.css'

const HomepageRegularCard = ({convertedGames}) => {
    const history = useHistory()
    const slicedGames = convertedGames.slice(13, 19)

    return (
        <>
        <div className='homepage-regular-card-container'>
        {convertedGames &&
        slicedGames &&
        slicedGames.map((game, index) => (
            <div key={index} className="five-games-card">
              <img src={game.preview} alt={game.name} className="five-games-card-image"
                onClick={() => history.push(`/games/${game.id}`)}
              />
              <p style={{fontSize: '12px', color: 'gray'}}>Base Game</p>
              <p className="three-games-card-name">{game.name}</p>
              <p className="three-games-card-price">${game.price}</p>
            </div>
          ))}
        </div>
        </>
    )
}

export default HomepageRegularCard
