import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import './HomepageFeaturedRightColumnCard.css'


const HomepageFeaturedRightColumnCard = ({currentGameId, previewImage, title, alt, cardClickHandler, setGameIdHandler, isClicked, setIsClicked}) => {
    const history = useHistory()
    const homepageFeaturedRightRedirect = () => {
        if (currentGameId) {
            history.push(`/games/${currentGameId}`);
          }
    }


    return (
        <div
        onClick={() => setGameIdHandler(currentGameId)}
        >
            <div className='featured-games-homepage-little-pictures-right-column-image-title-card'
            onClick={() => cardClickHandler(previewImage)}
            >
                <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                    <img
                        src={previewImage}
                        alt={alt}
                        onClick={homepageFeaturedRightRedirect}
                        onTransitionEnd={() => setIsClicked(false)}
                        className={`pop-image ${isClicked ? 'clicked' : ''}`}
                    />
                </div>
                <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image-title'>

                    <p>{title}</p>
                </div>
            </div>
        </div>

    )
}


export default HomepageFeaturedRightColumnCard
