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
                            style={{ color: 'white', fontFamily: 'Verdana', border: '1px solid white', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push(`/games/browse`)}
                        >Browse</h2>
                        <h2
                            style={{ color: 'white', fontFamily: 'Verdana', border: '1px solid white', width: '4rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={cartRedirectHandler}
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
