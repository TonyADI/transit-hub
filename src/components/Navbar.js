import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = props => {
    return (
        <div>
            <nav className="navbar">
                <a className="logo-link" href="./">Transit Hub</a>
                <SearchBar />
                <button>Login</button>
            </nav>
        </div>
    )
}

export default Navbar;