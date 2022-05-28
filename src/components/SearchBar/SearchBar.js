import './SearchBar.css'
const Searchbar = ({handleChange, handleClick, term, invalidCountry}) => {
    const handleSubmit = e => {
        handleClick();
        e.preventDefault();
    }
    return (
        <div className="searchbar">
            <div className="input-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor='country'></label>
                    <input
                        id='country' 
                        name='country'
                        placeholder="Enter a country..."
                        value={term} 
                        onChange={e => handleChange(e.target.value)}
                        style={{boxShadow: invalidCountry ? 
                        '0px 0px 0px 1px #dc3545':
                        '0px 0px 0px 1px #ccc'
                        }}/>
                </form>
            </div>
        </div>
    )
}

export default Searchbar;