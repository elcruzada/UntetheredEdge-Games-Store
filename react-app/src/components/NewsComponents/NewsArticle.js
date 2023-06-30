import { useParams } from 'react-router-dom'
import './NewsArticle.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleNewsThunk } from '../../store/news'
import LowerNavBar from '../LowerNavBar/LowerNavBar'

const NewsArticle = () => {
    const { newsId } = useParams()
    const dispatch = useDispatch()
    const newsArticle = useSelector(state => state.news.singleNews)
    // console.log('NEEWS', newsArticle)

    useEffect(() => {
        dispatch(getSingleNewsThunk(newsId))
    }, [dispatch, newsId])

    const date = new Date(newsArticle && newsArticle.created_at);
    const formattedDate = (date.getMonth() + 1) + "." + date.getDate() + "." + date.getFullYear();

    return (
        <>
            <div className='news-article-outer-container'>
                <div className='news-article-inner-container'>
                    <LowerNavBar />
                    <div style={{ width: '100rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={newsArticle && newsArticle.preview_image} alt='News Article' style={{ width: '1066px', height: '600px', marginTop: '3rem' }} />

                    </div>
                    <h1 style={{ color: 'black', marginTop: '3rem' }}>{newsArticle && newsArticle.title}</h1>
                    <p

                        style={{ fontSize: '20px' }}
                    >{formattedDate}</p>
                    <p
                        style={{ fontSize: '20px' }}

                    >by {newsArticle && newsArticle.writer && newsArticle.writer[0] && newsArticle.writer[0].toUpperCase() + newsArticle.writer.slice(1)}</p>
                    <p
                        style={{ fontSize: '23px', lineHeight: '3.5rem', textIndent: '5rem' }}
                    >{newsArticle && newsArticle.content}</p>
                </div>
            </div>
        </>
    )
}

export default NewsArticle
