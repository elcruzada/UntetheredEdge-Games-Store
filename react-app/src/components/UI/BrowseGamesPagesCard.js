import { useHistory } from 'react-router-dom'
import './BrowseGamesPagesCard.css'

const BrowseGamesPagesCard = ({game}) => {
    const history = useHistory()


    return (
        <div className='browse-games-pages-card-outer'
        onClick={() => history.push(`/games/${game.id}`)}
        style={{cursor: 'pointer'}}
        >
            <div className='browse-games-pages-card-inner'>
            <div className='browse-games-pages-card-top'>
            <img
            src={game.preview}
            style={{height: '10rem'}}
            >
            </img>

            </div>
            <div className='browse-games-pages-card-bottom'>
                <p>{game.name}</p>
                <p>{game.price}</p>
            </div>
            </div>
        </div>
    )
}

export default BrowseGamesPagesCard
