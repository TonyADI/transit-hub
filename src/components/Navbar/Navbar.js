import SearchBar from '../SearchBar/SearchBar';
import './Navbar.css';
// logo and button could be components
const Navbar = ({country, handleChange, handleClick, invalidCountry}) => {
    return (
        <div className="navbar-container">
            <nav className="navbar body-padding">
                <div className="logo-link-container">
                    <a className="logo-link" href="./">Transit Hub</a>
                </div>
                <SearchBar 
                    term={country} 
                    handleChange={handleChange}
                    handleClick={handleClick}
                    invalidCountry={invalidCountry}
                />
                <div className="login-bt-container">
                    <button className="login-bt">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;