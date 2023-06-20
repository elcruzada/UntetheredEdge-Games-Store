import './NewsCard.css'

const NewsCard = ({ article }) => {
    return (
      <div className='news-page-article-card-wrapper'>
        <div className='news-page-article-card-left-column'>
          <img
            src={article.preview_image || yourImageImportStatement}
            alt={article.title}
          />
        </div>
        <div className='news-page-article-card-right-column'>
          <p style={{ marginBottom: '5rem' }}>{article.created_at}</p>
          <p style={{ fontWeight: 'bold' }}>{article.title}</p>
          <p>{article.description}</p>
          <p style={{ marginTop: '1rem', color: 'gray' }}>Read More</p>
        </div>
      </div>
    );
  }

  export default NewsCard;
