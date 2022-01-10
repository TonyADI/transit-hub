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
                <input placeholder="Where would you like to go?"
                    value={props.term} onChange={handleChange}
                    onKeyPress={handleKeyPress}>
                </input>
            </div>
        </div>
    )
}

export default Searchbar;