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
            <div className='browse-games-pages-card-left-column'>
            <img
            src={game.preview}
            style={{height: '10rem'}}
            >
            </img>

            </div>
            <div className='browse-games-pages-card-right-column'>
                <h2>{game.name}</h2>
            </div>
            </div>
        </div>
    )
}

export default BrowseGamesPagesCard
