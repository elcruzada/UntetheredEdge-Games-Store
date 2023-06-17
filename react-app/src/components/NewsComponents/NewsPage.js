import { useSelector } from 'react-redux'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import Footer from '../UI/Footer'
import './NewsPage.css'

const NewsPage = () => {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <>
            <div className='news-page-outer-wrapper'>
                <div className='news-page-inner-wrapper'
                >
                    <LowerNavBar sessionUser={sessionUser} news={true} />
                    <h2>Epic Games News</h2>
                    <div className='news-page-highlighted-wrapper-left-right-column'
                        onClick={() => window.alert('Articles unavailable')}

                    >
                        <div className='news-page-highlighted-wrapper-left-column'>
                            <img
                                src='https://cdn.vox-cdn.com/thumbor/-7uaQ4eZbBC77FJZIviRRvVS-QE=/0x0:1920x1080/1400x788/filters:focal(960x540:961x541)/cdn.vox-cdn.com/uploads/chorus_asset/file/23647732/ffxviclive.png'
                                style={{ height: '20rem' }}
                            ></img>
                            <h3
                                style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                            >Final Fantasy 16 will knock your socks off</h3>
                            <p
                            >Grab the preorder today to feel completely fulfilled and happy with your life...</p>
                            <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                        </div>
                        <div className='news-page-highlighted-wrapper-right-column'>
                            <img
                                style={{ height: '20rem' }}
                                src='https://static.wikia.nocookie.net/8cf42a12-40e4-4d43-82db-a4c9244e5d8d'
                            ></img>
                            <h3
                                style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                            >Two gamers get bloody in a bar</h3>
                            <p
                            >Things got hairy when a no-deather tapped a speed runner in the shoulder...</p>
                            <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                        </div>
                    </div>
                    <div className='new-page-bottom-news-list-wrapper'
                        onClick={() => window.alert('Articles unavailable')}
                        style={{ maginTop: '2rem' }}
                    >


                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src='https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/02/hogwarts-legacy-mods-shrek-2-550x309.jpg'></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >2D Ago</p>
                                <p

                                    style={{ fontWeight: 'bold' }}
                                >Shrek has been added in the new Hogwarts DLC!</p>
                                <p
                                >
                                    Hey all you Shrekkers. It's time to Shrek once more in this fabulous shrektastic shrekventure...</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src='https://gamingtrend.com/wp-content/uploads/2022/11/Dragon02.jpg'
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >2M Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}>A group of tactics gamers simultaneously collapsed</p>
                                <p>A new epidemic of fainting has occurred as the craziest new tactics game made tactics gamers even more...</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src='https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2017/12/29/d525d9bc-765b-41d2-9906-af2b72c54353/mario-gta'
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >7M Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}
                                >Mario's new growth spurt has everyone on edge</p>
                                <p>Gamers all over the world are too used to their plumber friend being on the bit of the shorter side...</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src='https://ae01.alicdn.com/kf/H809dbedd1e694de38d6924c1c6acc91dC/POKEMON-Funny-Anime-Figures-15cm-Comical-Pikachu-Gengar-Bulbasaur-Charmander-Squirtle-Psyduck-Wretched-Expression-Model-Dolls.jpg'
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >1Y Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}
                                >Litendo makes a drastic change to the creatures' facial structure</p>
                                <p>Some are loving it. Some hating it. The most polarizing move in the franchise's history has every gamer on edge...</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewsPage
