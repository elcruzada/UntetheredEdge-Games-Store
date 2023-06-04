import { useEffect, useState } from 'react'
import { getAllGamesThunk } from '../../store/games'
import { useDispatch, useSelector } from 'react-redux'
import './Homepage.css'
import HomepageFeaturedCard from '../UI/HomepageFeaturedCard'
// import Carousel,
import { HomepageCarousel } from '../UI/Carousel'
import { useHistory } from 'react-router-dom'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import SingleGameDetailsCardThreeGames from '../UI/SingleGameDetailsCardThreeGames'
import Footer from '../UI/Footer'
import LoadingScreen from '../UI/Loading/LoadingScreen'
//3 divs, possibly do flex-direction column
const homepage = true

const Homepage = () => {
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

    const cartRedirectHandler = () => {
        if (!sessionUser) {
            window.alert("You must be logged in to access your cart")
        } else {
            history.push('/cart')
        }
    }

    if (!allGames) return null


    const convertedGames = Object.values(allGames)
    console.log(convertedGames)
    // console.log(allGames)
    // console.log(promotedGames[0])

    return (
        <>
            {
                loading ? <LoadingScreen /> :
                    <div>
                        <div className="global-outer-container">
                            <div className="global-inner-container">
                                <LowerNavBar sessionUser={sessionUser} homepage={homepage} />
                                <HomepageFeaturedCard allGames={allGames} />
                                <HomepageCarousel images={convertedGames} homepage={homepage} />
                                <SingleGameDetailsCardThreeGames convertedGames={convertedGames} />

                            </div>
                        </div>
                        <Footer />
                    </div>
            }
        </>
    )
}

export default Homepage
