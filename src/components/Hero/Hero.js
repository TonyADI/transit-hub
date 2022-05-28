const Hero = ({backgroundImage, handleClick}) => {
    return (
        <div className="hero-container" style={{backgroundImage: `url(${backgroundImage})`}}>
            <div className="img-overlay">
                <div className="hero-body">
                    <span className="hero-heading">
                        One-stop shop for all your travel needs
                    </span>
                    <a  
                        id="hero-link" 
                        href='#destination' 
                        className="hero-bt" 
                        onClick={handleClick}
                    >
                        Take me away
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;