const HomepageFeaturedRightColumnCard = ({previewImage, title}) => {


    return (
        <div>
            <div className='featured-games-homepage-little-pictures-right-column-image-title-card'>
                <div className='featured-games-homepage-little-pictures-right-column-image-title-card-image'>
                    <img
                        src={previewImage}
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
