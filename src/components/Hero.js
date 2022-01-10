const Hero = props => {
    return (
        <div className="hero-container">
            <div className="img-overlay">
                <div className="hero-body">
                    <span className="hero-heading">
                    One-stop shop for all your travel needs</span>
                    <a id="hero-link" href='#destination'>
                        <button className="hero-bt" onClick={props.handleClick}>
                            Take me away
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;