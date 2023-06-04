import { useState } from 'react';
import './HomepageFeaturedCard.css'
import HomepageFeaturedRightColumnCard from './HomepageFeaturedRightColumnCard'
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const HomepageFeaturedCard = ({ allGames }) => {
  const history = useHistory();
  const promotedGames = Object.values(allGames);
  const [bigPictureSource, setBigPictureSource] = useState('');
  const [previousPictureSource, setPreviousPictureSource] = useState('');
  const [currentPictureSource, setCurrentPictureSource] = useState('');
  const [isColumnSliding, setIsColumnSliding] = useState(false);
  const [currentGameId, setCurrentGameId] = useState('');
  const [isClicked, setIsClicked] = useState(false)

  const firstPromotedGamePreview = promotedGames[0]
  if (!firstPromotedGamePreview) return null
  const previewImage = firstPromotedGamePreview.game_images.find(game => game.preview === true)
  if (!previewImage.url) return null

  const cardClickHandler = (previewImage) => {
    setPreviousPictureSource(currentPictureSource);
    setCurrentPictureSource(previewImage);
    setIsColumnSliding(true);
    setIsClicked(!isClicked);
  };

  const setGameIdHandler = (id) => {
    setCurrentGameId(id);
  };

  const singleGameDetailsPageRedirect = () => {
    if (currentGameId) {
      history.push(`/games/${currentGameId}`);
    } else {
      history.push(`/games/${promotedGames[0].id}`);
    }
  };

  //   useEffect(() => {
  //     console.log('BIIIIG', bigPictureSource);
  //   }, [bigPictureSource]);

  return (
    <>
      <div className="featured-games-homepage-wrapper">
        <div
          className={`featured-games-homepage-big-picture-left-column ${isColumnSliding ? 'slide-in' : ''}`}
          onTransitionEnd={() => setIsColumnSliding(false)}
          onClick={singleGameDetailsPageRedirect}
        >
          {/* <img src={previousPictureSource} alt='featured-previous-picture-preview' /> */}
          <img src={currentPictureSource || previewImage.url} alt='featured-current-picture-preview' />
        </div>
        <div className="featured-games-homepage-little-pictures-right-column">
          {promotedGames && promotedGames.slice(0, 6).map((game) => {
            // const previewImage = game.game_images.find((image) => image.preview);
            return (
              <HomepageFeaturedRightColumnCard
                key={game.id}
                currentGameId={game.id}
                previewImage={game.preview}
                title={game.name}
                alt={`Featured preview: ${game.id}`}
                cardClickHandler={cardClickHandler}
                setGameIdHandler={setGameIdHandler}
                isClicked={currentPictureSource === game.preview}
                setIsClicked={setIsClicked}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HomepageFeaturedCard;
