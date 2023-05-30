import { useHistory } from "react-router-dom"
import UpdateGameDeveloperForm from "../GamesPages/UpdateGameDeveloperForm"
import OpenModalButton from "../OpenModalButton"
import DeleteGameModal from "../GamesPages/DeleteGameModal"
import { useSelector } from "react-redux"
import GameDeveloperImages from "../GamesPages/GameDeveloperImages"
import './DeveloperPortalGamesCard.css'
import Footer from "./Footer"

const DeveloperPortalGamesCard = ({ game }) => {
    //game image will be at the left
    //game info and update and delete will be at the right
    // console.log('GAAAME', game)
    const history = useHistory()

    return (
            <div className='developer-portal-games-card-outer-wrapper'>
                <div className='developer-portal-games-card-inner-wrapper'>

                    <div className='developer-portal-games-card-left-column'>

                        <img
                            src={game.preview || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}
                            style={{ cursor: 'pointer', maxHeight: '15rem' }}
                            onClick={() => { history.push(`/games/${game.id}`) }}
                        />
                    </div>
                    <div className='developer-portal-games-card-middle-column'>

                    </div>
                    <div className='developer-portal-update-delete-game-right-column'>
                        <h3>{game.name}</h3>

                        <OpenModalButton
                            buttonText="Update your game info!"
                            modalComponent={<UpdateGameDeveloperForm gameId={game.id} />}
                        />

                        <OpenModalButton
                            buttonText="Delete your game"
                            modalComponent={<DeleteGameModal gameId={game.id} />}
                        />

                        <OpenModalButton
                            buttonText="Add images to your game!"
                            modalComponent={<GameDeveloperImages gameId={game.id} />}
                        />
                    </div>
                </div>


            </div>
    )
}

export default DeveloperPortalGamesCard
