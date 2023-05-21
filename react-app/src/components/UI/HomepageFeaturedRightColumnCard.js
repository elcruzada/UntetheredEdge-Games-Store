const HomepageFeaturedRightColumnCard = ({currentGameId, previewImage, title, alt, cardClickHandler, setGameIdHandler}) => {


    return (
        <div
        onClick={() => setGameIdHandler(currentGameId)}
        >
            <div className='featured-games-homepage-little-pictures-right-column-image-title-card'
            onClick={() => cardClickHandler(previewImage)}
            >
                <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                    <img
                        src={previewImage}
                        alt={alt}
                    />
                </div>
                <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image-title'>

                    <p>{title}</p>
                </div>
            </div>
        </div>

    )
}


export default HomepageFeaturedRightColumnCard
