import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllCommentsThunk } from "../../store/comments"
import { useHistory } from "react-router-dom"
import BrowseGamesPagesCard from "../UI/BrowseGamesPagesCard"
import { getAllGamesThunk } from "../../store/games"
import './BrowseGamesPages.css'
import LowerNavBar from "../LowerNavBar/LowerNavBar"
import Footer from "../UI/Footer"
import LoadingScreen from '../UI/Loading/LoadingScreen'


const BrowseGamesPages = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allGames = useSelector(state => state.games.allGames)
    const sessionUser = useSelector(state => state.session.user)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllGamesThunk()).then(() => {
            setLoading(false);
        })
    }, [dispatch])


    if (!allGames) return null

    const convertedGames = Object.values(allGames)
    console.log('CONVERTED', convertedGames)

    return (
        <> {
            loading ? <LoadingScreen /> :

                <div>

                    <div className='browse-games-pages-outer'>
                        <div className='browse-games-pages-inner'>
                            <LowerNavBar sessionUser={sessionUser} browse={true} />
                            <div className='browse-games-pages-games'>
                                {convertedGames && convertedGames.reverse().map(game => {
                                    // console.log('GAAAEM', game)
                                    return <BrowseGamesPagesCard
                                        key={game.id}
                                        game={game} />
                                })}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
        }
        </>
    )
}

export default BrowseGamesPages
