const Banner = ({styleName, bgColor, text}) => {
    const newBgColor = {backgroundImage: `linear-gradient(${bgColor}, ${bgColor})`}
    return (
        <div className={`banner ${styleName}`}
            style={newBgColor}>
            {text}
        </div>
    )
}

export default Banner;