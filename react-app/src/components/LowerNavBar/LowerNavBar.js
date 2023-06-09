import { useHistory } from 'react-router-dom'
import './LowerNavBar.css'
import { useState } from 'react'

const LowerNavBar = ({ sessionUser, homepage, browse, news }) => {
    const history = useHistory()
    // const [isClicked, setIsClicked ] = useState(false)
    const [isDiscoverHover, setisDiscoverHover] = useState(false)
    const [isBrowseHover, setisBrowseHover] = useState(false)
    const [isNewsHover, setisNewsHover] = useState(false)
    const [isCartHover, setIsCartHover] = useState(false)

    const cartRedirectHandler = () => {
        if (!sessionUser) {
            window.alert("You must be logged in to access your cart")
        } else {
            history.push('/cart')
        }
    }

    return (
        <>
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
                    {
                        homepage ?
                            <h2
                                className='lower-nav-bar-homepage hover-effect'
                                style={{ color: (isDiscoverHover || homepage) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer', border: '2.5px solid white', marginLeft: '1rem' }}
                                onClick={() => {
                                    history.push(`/`)
                                }}
                                onMouseEnter={() => setisDiscoverHover(true)}
                                onMouseLeave={() => setisDiscoverHover(false)}
                            >Discover</h2>
                            :
                            <h2
                                className='lower-nav-bar-homepage hover-effect'
                                style={{ color: (isDiscoverHover || homepage) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer', marginLeft: '1rem' }}
                                onClick={() => {
                                    history.push(`/`)
                                }}
                                onMouseEnter={() => setisDiscoverHover(true)}
                                onMouseLeave={() => setisDiscoverHover(false)}
                            >Discover</h2>
                    }
                    {
                        browse ?
                            <h2
                                className='lower-nav-bar-homepage hover-effect'
                                style={{ color: (isBrowseHover || browse) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer', border: '2.5px solid white' }}
                                onClick={() => {

                                    history.push(`/games/browse`)
                                }
                                }
                                onMouseEnter={() => setisBrowseHover(true)}
                                onMouseLeave={() => setisBrowseHover(false)}
                            >Browse</h2>
                            :
                            <h2
                                className='lower-nav-bar-homepage hover-effect'
                                style={{ color: (isBrowseHover || browse) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer' }}
                                onClick={() => {

                                    history.push(`/games/browse`)
                                }}
                                onMouseEnter={() => setisBrowseHover(true)}
                                onMouseLeave={() => setisBrowseHover(false)}
                            >Browse</h2>
                    }
                    {
                    news ?
                    <h2
                        className='lower-nav-bar-homepage hover-effect'
                        style={{ color: (isNewsHover || news) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer', border: '2.5px solid white' }}
                        onClick={() => {
                            history.push('/news')
                        }}
                        onMouseEnter={() => setisNewsHover(true)}
                        onMouseLeave={() => setisNewsHover(false)}
                    >News</h2>
                    :
                    <h2
                        className='lower-nav-bar-homepage hover-effect'
                        style={{ color: (isNewsHover || news) ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '', textAlign: 'center', borderRadius: '10px', paddingTop: '.5rem', paddingBottom: ".5rem", paddingLeft: '1rem', paddingRight: '1rem', cursor: 'pointer' }}
                        onClick={() => {
                            history.push('/news')
                        }}
                        onMouseEnter={() => setisNewsHover(true)}
                        onMouseLeave={() => setisNewsHover(false)}
                    >News</h2>
                    }
                </div>
                <div className="top-bar-homepage-container-right-column hover-effect">
                    <h2
                        style={{ color: isCartHover ? 'white' : 'gray', fontSize: '16px', fontWeight: 'light', width: '5rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                        onClick={cartRedirectHandler}
                        onMouseEnter={() => setIsCartHover(true)}
                        onMouseLeave={() => setIsCartHover(false)}
                    >Cart</h2>
                </div>
            </div>
        </>
    )

}

export default LowerNavBar
