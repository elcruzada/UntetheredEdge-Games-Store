import gamingGif from '../../images/aac_vtp_capacitor.gif'
import UELogo from '../../images/UE_logo.png'
import { NavLink } from "react-router-dom"
import './GameDeveloperPage.css'
import { useSelector } from 'react-redux'
import Footer from '../UI/Footer'
import LowerNavBar from '../LowerNavBar/LowerNavBar.js'
import LoadingScreen from '../UI/Loading/LoadingScreen'
import { useEffect, useState } from 'react'

const GameDeveloperPage = () => {
    const sessionUser = useSelector(state => state.session.user)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 400);

        return () => clearTimeout(delay);
    }, []);

    return (
        <> {
            isLoading ? <LoadingScreen /> :
                <div className='game-developer-page-outer-wrapper'>
                    <div className='game-developer-page-inner-wrapper'>
                        <LowerNavBar sessionUser={sessionUser} />
                        <div className="gif-container">
                            <img
                                src='https://picsum.photos/id/528/1000/1000'
                                alt='gamingGif'
                                style={{ borderRadius: '5px', height: '32rem' }}
                            />
                            <div className="overlay-text">
                                <img
                                    src={UELogo}
                                    style={{ height: '3rem', marginBottom: '2rem' }}
                                    alt='gamingLogo'
                                ></img>
                                <h2 style={{ marginBottom: '2rem' }}>Publish with us!</h2>
                                {
                                    sessionUser ?
                                        <div
                                            className="game-developer-page-button"
                                        // style={{ textDecoration: 'none', fontSize: '1rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '4rem' }}
                                        >
                                            <NavLink exact to='/developer/form'
                                            >
                                                Submit a new game application today!
                                            </NavLink>
                                        </div>
                                        :
                                        <div
                                            className="game-developer-page-button"
                                        // style={{ textDecoration: 'none', fontSize: '1rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', marginBottom: '4rem' }}
                                        >
                                            <NavLink exact to='/login'
                                            >
                                                Log in to submit a new game application!
                                            </NavLink>
                                        </div>
                                }
                                <p style={{ color: 'white', textAlign: 'center', fontSize: '18px', marginBottom: '2rem' }}>Already a partner?</p>
                                {sessionUser ?
                                    <div
                                        className="game-developer-page-button"
                                    >
                                        <NavLink exact to='/developer/portal'

                                        >
                                            Check out games in your developer portal
                                        </NavLink>
                                    </div>
                                    :
                                    <div
                                        className="game-developer-page-button"
                                    >
                                        <NavLink exact to='/login'

                                        >
                                            Log in to see games in your portal
                                        </NavLink>
                                    </div>
                                }
                                <p style={{ color: 'white', textAlign: 'center', fontSize: '18px', marginBottom: '2rem' }}>Are you an author?</p>
                                {sessionUser ?
                                    <div
                                        className="game-developer-page-button"
                                    >
                                        <NavLink exact to='/writer/portal'

                                        >
                                            Check out the articles in your author portal
                                        </NavLink>
                                    </div>
                                    :
                                    <div
                                        className="game-developer-page-button"
                                    >
                                        <NavLink exact to='/login'

                                        >
                                            Log in to see the articles in your portal
                                        </NavLink>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="developer-page-column-container">
                            <div className="developer-page-column">

                                <div className="developer-column-item">

                                    <i className="fa-solid fa-globe" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>Reach a global audience</h2>
                                    <p>
                                        Direct distribution to over 23 users across 1 country with 1 language supported.
                                    </p>
                                </div>

                            </div>
                            <div className="developer-page-column">
                                <div className="developer-column-item">
                                    <i className="fa-solid fa-money-check-dollar" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>12%/88% Revenue Split</h2>
                                    <p>
                                        Keep 12% of the revenue and monitor product performance with an abacus.

                                    </p>

                                </div>
                            </div>
                            <div className="developer-page-column">
                                <div className="developer-column-item">
                                    <i className="fa-sharp fa-solid fa-gamepad" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>Drive Player Engagement</h2>
                                    <p>
                                        Tap into store features like comment trolls, empty wishlists, store-wide window-shopping and more!

                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="developer-page-column-container"
                            style={{ marginTop: '1rem' }}
                        >
                            <div className="developer-page-column">

                                <div className="developer-column-item">
                                    <i className="fa-solid fa-cart-plus" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>Worldwide E-Commerce</h2>
                                    <p>
                                        UEI's payment service supports 1 payment method with no regional currencies.
                                    </p>
                                </div>

                            </div>
                            <div className="developer-page-column">
                                <div className="developer-column-item">
                                    <i className="fa-solid fa-wallet" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>UE Wallet</h2>
                                    <p>
                                        Users can load up their Wallet with imaginary funds to spend on products and services in the store.

                                    </p>

                                </div>
                            </div>
                            <div className="developer-page-column">
                                <div className="developer-column-item">
                                    <i className="fa-solid fa-person-circle-plus" style={{ fontSize: '3.5rem', color: '#C69749', marginBottom: '1rem' }}></i>
                                    <h2>Additional Benefits</h2>
                                    <p>
                                        Hard IARC ratings in the Developer Portal, request high-cost localization for store pages.

                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        }
            <Footer />
        </>
    )
}

export default GameDeveloperPage;
