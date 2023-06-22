import { useDispatch, useSelector } from 'react-redux'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import Footer from '../UI/Footer'
import './NewsPage.css'
import { useEffect } from 'react'
import { getAllNewsThunk } from '../../store/news'

const NewsPage = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const newsArticle = useSelector(state => state.news.allNews)
    const convertedNews = Object.values(newsArticle)
    console.log('NEWWWWWWS', convertedNews)

    useEffect(() => {
        dispatch(getAllNewsThunk())
    },[dispatch])

    return (
        <>
            <div className='news-page-outer-wrapper'>
                <div className='news-page-inner-wrapper'
                style={{marginTop: '4rem'}}
                >
                    <LowerNavBar sessionUser={sessionUser} news={true} />
                    <h2>Epic Games News</h2>
                    <div className='news-page-highlighted-wrapper-left-right-column'
                        onClick={() => window.alert('Articles unavailable')}

                    >
                        <div className='news-page-highlighted-wrapper-left-column'>
                            <img
                                src={convertedNews && convertedNews[0] && convertedNews[0].preview_image}
                                style={{ height: '20rem' }}
                            ></img>
                            <h3
                                style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                            >{convertedNews && convertedNews[0] && convertedNews[0].title}</h3>
                            <p
                            >{convertedNews && convertedNews[0] && convertedNews[0].description}</p>
                            <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                        </div>
                        <div className='news-page-highlighted-wrapper-right-column'>
                            <img
                                style={{ height: '20rem' }}
                                src={convertedNews && convertedNews[1] && convertedNews[1].preview_image}
                            ></img>
                            <h3
                                style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                            >{convertedNews && convertedNews[1] && convertedNews[1].title}</h3>
                            <p
                            >{convertedNews && convertedNews[1] && convertedNews[1].description}</p>
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
                                    src={convertedNews && convertedNews[2] && convertedNews[2].preview_image}></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >2D Ago</p>
                                <p

                                    style={{ fontWeight: 'bold' }}
                                >{convertedNews && convertedNews[2] && convertedNews[2].title}</p>
                                <p
                                >
                                    {convertedNews && convertedNews[2] && convertedNews[2].description}</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src={convertedNews && convertedNews[3] && convertedNews[3].preview_image}
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >2M Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}>{convertedNews && convertedNews[3] && convertedNews[3].title}</p>
                                <p> {convertedNews && convertedNews[3] && convertedNews[3].description}</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src={convertedNews && convertedNews[4] && convertedNews[4].preview_image}
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >7M Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}
                                >{convertedNews && convertedNews[4] && convertedNews[4].title}</p>
                                <p>{convertedNews && convertedNews[4] && convertedNews[4].description}</p>
                                <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
                            </div>
                        </div>
                        <div className='news-page-article-card-wrapper'>
                            <div className='news-page-article-card-left-column'>
                                <img
                                    src={convertedNews && convertedNews[5] && convertedNews[5].preview_image}
                                ></img>
                            </div>
                            <div className='news-page-article-card-right-column'>
                                <p
                                    style={{ marginBottom: '5rem' }}
                                >1Y Ago</p>
                                <p
                                    style={{ fontWeight: 'bold' }}
                                >{convertedNews && convertedNews[5] && convertedNews[5].title}</p>
                                <p>{convertedNews && convertedNews[5] && convertedNews[5].description}</p>
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
