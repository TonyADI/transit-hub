import './SearchBar.css'

const Searchbar = props => {
    const handleChange = e => {
        props.handleChange(e.target.value)
    }
    return (
        <div className="searchbar navbar-rnd">
            <input placeholder="Where would you like to go?"
            value={props.term} onChange={handleChange}></input>
        </div>
    )
}

export default Searchbar;