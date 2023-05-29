import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCommentsThunk } from "../../store/comments"
import { useHistory } from "react-router-dom"
import BrowseGamesPagesCard from "../UI/BrowseGamesPagesCard"
import { getAllGamesThunk } from "../../store/games"
import './BrowseGamesPages.css'


const BrowseGamesPages = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allGames = useSelector(state => state.games.allGames)
    const sessionUser = useSelector(state => state.session.user)

    useEffect(() => {
        dispatch(getAllGamesThunk())
    }, [dispatch])

    const cartRedirectHandler = () => {
        if (!sessionUser) {
            window.alert("You must be logged in to access your cart")
        } else {
            history.push('/cart')
        }
    }


    if (!allGames) return null

    const convertedGames = Object.values(allGames)
    console.log('CONVERTED', convertedGames)

    return (
        <div className='browse-games-pages-outer'>
            <div className='browse-games-pages-inner'>
                <p
                    style={{ color: 'white', paddingBottom: '3rem', display: 'flex', alignItems: 'center' }}
                >A gaming marketplace where you can buy games, leave your thoughts, and publish your own!</p>
                <div className="top-bar-homepage-container">
                    <div className="top-bar-homepage-container-left-column">
                        <div className="search-bar">
                            <input type="text" placeholder="Feature coming soon" className="search-input" />
                            <button className="search-button"
                                onClick={() => window.alert("Feature coming soon")}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push(`/`)}
                        >Discover</h2>
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push(`/games/browse`)}
                        >Browse</h2>
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => window.alert("Feature coming soon")}
                        >News</h2>
                    </div>
                    <div className="top-bar-homepage-container-right-column">
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '5rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={cartRedirectHandler}
                        >Cart</h2>
                    </div>
                </div>
                {convertedGames && convertedGames.map(game => {
                    // console.log('GAAAEM', game)
                    return <BrowseGamesPagesCard
                        key={game.id}
                        game={game} />
                })}
            </div>
        </div>
    )
}

export default BrowseGamesPages
