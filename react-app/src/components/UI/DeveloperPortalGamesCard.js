import { useHistory } from "react-router-dom"
import UpdateGameDeveloperForm from "../GamesPages/UpdateGameDeveloperForm"
import OpenModalButton from "../OpenModalButton"
import DeleteGameModal from "../GamesPages/DeleteGameModal"
import { useSelector } from "react-redux"

const DeveloperPortalGamesCard = ({game}) => {
    //game image will be at the left
    //game info and update and delete will be at the right
    console.log('GAAAME', game)
    const history = useHistory()

    return (
        <div className='developer-portal-games-card-outer-wrapper'>
            {/* <div className='developer-portal-games-card-inner-wrapper'>
                <div className='developer-portal-games-card-left-column'>

                </div>
                <div className='developer-portal-games-card-middle-column'>

                </div>
                <div className='developer-portal-update-delete-game-right-column'>

                </div>
            </div> */}
            <img
                src={game.preview}
                style={{cursor: 'pointer'}}
                onClick={() => {history.push(`/games/${game.id}`)}}
            />


            <OpenModalButton
            buttonText="Update your game info!"
            modalComponent={<UpdateGameDeveloperForm gameId={game.id}/>}
            />

            <OpenModalButton
            buttonText="Delete your game"
            modalComponent={<DeleteGameModal gameId={game.id}/>}
            />
        </div>
    )
}

export default DeveloperPortalGamesCard
