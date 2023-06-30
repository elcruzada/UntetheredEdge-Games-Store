import { useHistory } from "react-router-dom"
import OpenModalButton from "../OpenModalButton"
import './DeveloperPortalGamesCard.css'
import DeleteArticleModal from "../NewsComponents/DeleteArticleModal"
import { NavLink } from "react-router-dom"

const WriterPortalArticleCard = ({ article }) => {
    //game image will be at the left
    //game info and update and delete will be at the right
    // console.log('GAAAME', game)
    const history = useHistory()

    return (
            <div className='developer-portal-games-card-outer-wrapper'>
                <div className='developer-portal-games-card-inner-wrapper'>
                    <div className='developer-portal-games-card-left-column'>
                        <img
                            src={article.preview_image || 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'}
                            style={{ cursor: 'pointer', maxHeight: '15rem' }}
                            onClick={() => { history.push(`/news/${article.id}`) }}
                        />
                    </div>
                    <div className='developer-portal-games-card-middle-column'>

                    </div>
                    <div className='developer-portal-update-delete-game-right-column'>
                        <h3>{article.title}</h3>
                        <NavLink exact to={`/news/${article.id}/update`}
                        style={{color: 'white'}}
                        >Update your Article</NavLink>
                        <OpenModalButton
                            buttonText="Delete your article"
                            modalComponent={<DeleteArticleModal newsId={article.id} />}
                        />
                    </div>
                </div>
            </div>
    )
}

export default WriterPortalArticleCard
