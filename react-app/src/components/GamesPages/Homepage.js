import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import './Homepage.css'

//3 divs, possibly do flex-direction column

const Homepage = () => {
    const dispatch = useDispatch()
    const allGames = useSelector(state => state.allGames)
    

    useEffect(() => {
        dispatch(getAllGamesThunk())
    },[dispatch])


    return (
        <>
            <div className="global-outer-container">
                <div className="global-inner-container">
                    <div className="top-bar-homepage-container"></div>
                    <div className="featured-games-homepage">
                        <div className="featured-games-homepage-big-picture-left-column">

                        </div>
                        <div className="featured-games-homepage-little-pictures-right-column"></div>
                    </div>
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
