import { useDispatch, useSelector } from 'react-redux'
import LowerNavBar from '../LowerNavBar/LowerNavBar'
import Footer from '../UI/Footer'
import './NewsPage.css'
import { useEffect, useState } from 'react'
import { getAllNewsThunk } from '../../store/news'
import { useHistory } from 'react-router-dom'
import LoadingScreen from '../UI/Loading/LoadingScreen'

const NewsPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const newsArticle = useSelector(state => state.news.allNews)
    const convertedNews = Object.values(newsArticle).reverse()
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(getAllNewsThunk()).then(() => {
            setLoading(false);
        })
    }, [dispatch])

    const newsRedirectHandler = (id) => {
        history.push(`/news/${id}`)
    }

    const date = new Date(convertedNews && convertedNews.created_at);
    // const formattedDate = (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear();
    const formattedDate = (new Date(convertedNews && convertedNews[2] && convertedNews[2].created_at).getMonth() + 1) + "." + new Date(convertedNews && convertedNews[2] && convertedNews[2].created_at).getDate() + "." + new Date(convertedNews && convertedNews[2] && convertedNews[2].created_at).getFullYear();
    const formatDate = (dateStr) => {
        const date = new Date(dateStr);
        return `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear()}`;
    };

    return (
        <>
            {
                loading ? <LoadingScreen /> :
                    <div className='news-page-outer-wrapper'>
                        <div className='news-page-inner-wrapper'
                            style={{ marginTop: '4rem' }}
                        >
                            <LowerNavBar sessionUser={sessionUser} news={true} />
                            <h2>Epic Games News</h2>
                            <div className='news-page-highlighted-wrapper-left-right-column'

                            >
                                <div className='news-page-highlighted-wrapper-left-column'
                                >
                                    <img
                                        src={convertedNews && convertedNews[0] && convertedNews[0].preview_image}
                                        style={{ height: '20rem' }}
                                        onClick={() => newsRedirectHandler(convertedNews[0].id)}
                                    ></img>
                                    <p
                                        style={{ marginBottom: '.5rem' }}
                                    >{(new Date(convertedNews && convertedNews[0] && convertedNews[0].created_at).getMonth() + 1) + "." + new Date(convertedNews && convertedNews[0] && convertedNews[0].created_at).getDate() + "." + new Date(convertedNews && convertedNews[0] && convertedNews[0].created_at).getFullYear()}</p>
                                    <h3
                                        style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                                    >{convertedNews && convertedNews[0] && convertedNews[0].title}</h3>
                                    <p
                                    >{convertedNews && convertedNews[0] && convertedNews[0].description}</p>
                                    <p style={{ marginTop: '1rem', color: 'gray', cursor: 'pointer' }}
                                        onClick={() => newsRedirectHandler(convertedNews[0].id)}

                                    >Read More</p>
                                </div>
                                <div className='news-page-highlighted-wrapper-right-column'
                                >
                                    <img
                                        style={{ height: '20rem' }}
                                        src={convertedNews && convertedNews[1] && convertedNews[1].preview_image}
                                        onClick={() => newsRedirectHandler(convertedNews[1].id)}
                                    ></img>
                                    <p
                                        style={{ marginBottom: '.5rem' }}
                                    >{(new Date(convertedNews && convertedNews[1] && convertedNews[1].created_at).getMonth() + 1) + "." + new Date(convertedNews && convertedNews[1] && convertedNews[1].created_at).getDate() + "." + new Date(convertedNews && convertedNews[1] && convertedNews[1].created_at).getFullYear()}</p>
                                    <h3
                                        style={{ marginBottom: '3rem', fontWeight: 'bold' }}
                                    >{convertedNews && convertedNews[1] && convertedNews[1].title}</h3>
                                    <p
                                    >{convertedNews && convertedNews[1] && convertedNews[1].description}</p>
                                    <p style={{ marginTop: '1rem', color: 'gray', cursor: 'pointer' }}
                                        onClick={() => newsRedirectHandler(convertedNews[1].id)}
                                    >Read More</p>
                                </div>
                            </div>
                            <div className='new-page-bottom-news-list-wrapper'
                                style={{ maginTop: '2rem' }}
                            >


                                {convertedNews && convertedNews.slice(2).map((news, index) => (
                                    <div key={index} className='news-page-article-card-wrapper'>
                                        <div className='news-page-article-card-left-column'>
                                            <img
                                                src={news?.preview_image}
                                                onClick={() => newsRedirectHandler(news.id)}
                                            />
                                        </div>
                                        <div className='news-page-article-card-right-column'>
                                            <p style={{ marginBottom: '5rem' }}>{formatDate(news?.created_at)}</p>
                                            <p style={{ fontWeight: 'bold' }}>{news?.title}</p>
                                            <p>{news?.description}</p>
                                            <p
                                                style={{ marginTop: '1rem', color: 'gray', cursor: 'pointer' }}
                                                onClick={() => newsRedirectHandler(news.id)}
                                            >
                                                Read More
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
            }
            <Footer />
        </>
    )
}

export default NewsPage
