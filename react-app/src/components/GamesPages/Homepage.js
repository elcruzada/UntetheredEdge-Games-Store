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
                            style={{ color: 'white', paddingBottom: '3rem', display: 'flex', alignItems: 'center' }}
                        >A gaming marketplace where you can buy games, leave your thoughts on them, and even publish your own!</p>
                        <div className="search-bar">
                            <input type="text" placeholder="Feature coming soon" className="search-input" />
                            <button className="search-button">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <h2
                            style={{ color: 'white', fontSize:'16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push(`/games/browse`)}
                        >Browse</h2>
                        <h2
                            style={{ color: 'white', fontSize:'16px', fontWeight: 'light', width: '4rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
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
