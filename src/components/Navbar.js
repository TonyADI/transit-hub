import SearchBar from './SearchBar';
import './Navbar.css';

const Navbar = props => {
    return (
        <div className="navbar-container">
            <nav className="navbar body-padding">
                <div className="logo-link-container">
                    <a className="logo-link" href="./">Transit Hub</a></div>
                <SearchBar term={props.country} handleChange={props.handleChange}/>
                <div className="login-bt-container">
                    <button className="login-bt navbar-rnd">Login</button></div>
            </nav>
        </div>
    )
}

export default Navbar;