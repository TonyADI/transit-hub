import './SearchBar.css'

const Searchbar = props => {
    const handleChange = e => {
        props.handleChange(e.target.value)
    }
    return (
        <div className="searchbar">
            <div className="input-container">
                <input placeholder="Where would you like to go?"
            value={props.term} onChange={handleChange}></input></div>
        </div>
    )
}

export default Searchbar;