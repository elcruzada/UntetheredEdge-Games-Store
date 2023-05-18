import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import './Homepage.css'
import HomepageFeaturedCard from '../UI/HomepageFeaturedCard'

//3 divs, possibly do flex-direction column

const Homepage = () => {
    const dispatch = useDispatch()
    const allGames = useSelector(state => state.games.allGames)
    // const firstPromotedGame = Object.values(allGames)[0]


    useEffect(() => {
        dispatch(getAllGamesThunk())
    },[dispatch])

    if (!allGames) return null

    return (
        <>
            <div className="global-outer-container">
                <div className="global-inner-container">
                    <div className="top-bar-homepage-container"></div>
                    <HomepageFeaturedCard allGames={allGames}/>

                    <div className="homepage-bottom-scroll-bar">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage
