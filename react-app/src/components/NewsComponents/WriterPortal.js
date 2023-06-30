import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './WriterPortal.css'
import { useEffect } from 'react'
import Footer from '../UI/Footer'
import { getAllNewsThunk } from '../../store/news'
import WriterPortalArticleCard from '../UI/WriterPortalArticleCard'

const WriterPortal = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserArticles = useSelector(state => state.news.allNews)

    useEffect(() => {
        dispatch(getAllNewsThunk())
    }, [dispatch])

    const convertedSessionUserArticles = Object.values(sessionUserArticles)

    const writerPortalArticles = convertedSessionUserArticles.filter(article => {
        if (article && sessionUser) {
            return article.user_id === sessionUser.id
        }
    })

    return (
        <>
            <div className='game-developer-portal-outer-wrapper'>
                <div className='game-developer-portal-inner-wrapper'>
                    {
                        !sessionUser ?

                            <NavLink exact to='/login'>
                                <h2
                                    style={{ color: 'white', textAlign: 'center' }}
                                >Log in or create an account to see your writer portal!</h2>
                            </NavLink>
                            :
                            <div className='game-developer-portal-wrapper'
                            >
                                <div className='submit-new-application-link'
                                    style={{ height: '15rem' }}
                                >

                                    <NavLink exact to='/writer/form'
                                        style={{ textDecoration: 'none', fontStyle: 'Calibri', fontSize: '3rem', textAlign: 'center', color: 'white', border: '1px solid white', boxShadow: '5px 5px 5px gray', padding: '2rem' }}
                                    >
                                        Submit a new article application!
                                    </NavLink>
                                </div>
                                {writerPortalArticles && writerPortalArticles.map(article => {
                                    return <WriterPortalArticleCard article={article} />
                                })}
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default WriterPortal
