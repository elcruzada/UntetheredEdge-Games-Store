import { useParams } from 'react-router-dom'
import './NewsArticle.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleNewsThunk } from '../../store/news'

const NewsArticle = () => {
    const { newsId } = useParams()
    const dispatch = useDispatch()
    const newsArticle = useSelector(state => state.news.singleNews)
    // console.log('NEEWS', newsArticle)

    useEffect(() => {
        dispatch(getSingleNewsThunk(newsId))
    },[dispatch, newsId])

    return (
        <div className='news-article-outer-container'>
            <div className='news-article-inner-container'>
                {/* <img src={newsArticle && }></img> */}
                <h2 style={{color: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{newsArticle && newsArticle.title}</h2>
            </div>
        </div>
    )
}

export default NewsArticle
