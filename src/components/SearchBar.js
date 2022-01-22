import './SearchBar.css'

const Searchbar = props => {
    const handleChange = e => {
        props.handleChange(e.target.value)
    }
    const handleKeyPress = e => {
        if(e.which === 13){
            props.handleClick();
        }
    }
    return (
        <div className="searchbar">
            <div className="input-container">
                <input placeholder="Enter a country..."
                    value={props.term} 
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    style={{outline: props.validCountry ? 
                       '1px solid #ccc' :
                       '1px solid #dc3545'
                       }}
                >
                </input>
            </div>
        </div>
    )
}

export default Searchbar;