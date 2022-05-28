import './Carousel.css';
const Carousel = ({loading, photos}) => {
    return (
        <div className="carousel">
            {!loading ? photos.length ? photos.map(photo =>
                    <img 
                        src={photo.imgUrl} 
                        alt={photo.descrp} 
                        key={photo.id}
                    />) 
                    :
                'No Images' 
            : 
            <div className="loading">
            </div>
        }
        </div>
    )
}

export default Carousel;