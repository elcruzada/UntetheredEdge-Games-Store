import { useEffect } from 'react'
import { getAllGamesThunk } from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import './Homepage.css'
import HomepageFeaturedCard from '../UI/HomepageFeaturedCard'
import Carousel from '../UI/Carousel'
import { useHistory } from 'react-router-dom'
//3 divs, possibly do flex-direction column
const homepage = true

const Homepage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const allGames = useSelector(state => state.games.allGames)

    useEffect(() => {
        dispatch(getAllGamesThunk())
    }, [dispatch])

    if (!allGames) return null


    const convertedGames = Object.values(allGames)
    // console.log(allGames)
    // console.log(promotedGames[0])

    return (
        <>
            <div className="global-outer-container">
                <div className="global-inner-container">
                    <div className="top-bar-homepage-container">
                        <p
                            style={{ color: 'white', fontFamily: 'Verdana' }}
                        >A gaming marketplace where you can buy games, leave your thoughts on them, and even publish your own!</p>
                        <h2
                            style={{ color: 'white', fontFamily: 'Verdana', border: '1px solid white', width: '4rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push('/cart')}
                        >Cart</h2>
                    </div>
                    <HomepageFeaturedCard allGames={allGames} />

                    <Carousel images={convertedGames} homepage={homepage} />
                    {/* <div className="homepage-bottom-scroll-bar">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Homepage
