import { useState } from 'react';
import './SearchBar.css'

const Searchbar = props => {
    const [term, setTerm] = useState('');
    return (
        <div className="searchbar navbar-rnd">
            <input placeholder="Where would you like to go?"
            value={term} onChange={e => setTerm(e.target.value)}></input>
        </div>
    )
}

export default Searchbar;