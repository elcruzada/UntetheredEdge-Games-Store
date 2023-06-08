import './NewsPage.css'

const NewsPage = () => {
    return (
        <>
            <div className='news-page-outer-wrapper'>
                <div className='news-page-inner-wrapper'>
                    <h2>Epic Games News</h2>
                    <div className='news-page-highlighted-wrapper-left-right-column'>
                        <div className='news-page-highlighted-wrapper-left-column'>
                            <img></img>
                            <p></p>
                            <p></p>
                            <p>Read More</p>
                        </div>
                        <div className='news-page-highlighted-wrapper-right-column'>
                            <img></img>
                            <p></p>
                            <p></p>
                            <p>Read More</p>
                        </div>
                    </div>
                <div className='new-page-bottom-news-list-wrapper'></div>
                </div>
            </div>
        </>
    )
}

export default NewsPage
