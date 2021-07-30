import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar body-padding">
                <a className="logo-link" href="./">Transit Hub</a>
                <SearchBar term={props.country} handleChange={props.handleChange}/>
                <button className="login-bt navbar-rnd">Login</button>
            </nav>
        </div>
    )
}

export default Navbar;