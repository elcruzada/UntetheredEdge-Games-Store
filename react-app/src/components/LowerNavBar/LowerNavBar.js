import { useHistory } from 'react-router-dom'
import './LowerNavBar.css'

const LowerNavBar = ({sessionUser, homepage, browse}) => {
    const history = useHistory()

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
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer', borderBottom: '1px solid gray', marginLeft: '1rem' }}
                            onClick={() => history.push(`/`)}
                        >Discover</h2>
                        :
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer', marginLeft: '1rem' }}
                            onClick={() => history.push(`/`)}
                        >Discover</h2>
                    }
                    {
                        browse ?
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer', borderBottom: '1px solid gray' }}
                            onClick={() => history.push(`/games/browse`)}
                        >Browse</h2>
                        :
                        <h2
                            style={{ color: 'white', fontSize: '16px', fontWeight: 'light', width: '6rem', textAlign: 'center', borderRadius: '10px', padding: ".5rem", cursor: 'pointer' }}
                            onClick={() => history.push(`/games/browse`)}
                        >Browse</h2>
                    }
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
        </>
    )

}

export default LowerNavBar
