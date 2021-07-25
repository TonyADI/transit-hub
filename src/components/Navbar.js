import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar body-padding">
                <a className="logo-link" href="./">Transit Hub</a>
                <SearchBar />
                <button className="login-bt navbar-rnd">Login</button>
            </nav>
        </div>
    )
}

export default Navbar;