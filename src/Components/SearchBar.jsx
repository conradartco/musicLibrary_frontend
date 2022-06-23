import React, { useState } from 'react';
import './Components.css'

const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newQuery = query.toLocaleLowerCase();
        console.log(newQuery);
        props.queryData(newQuery)
    }

    return ( 
        <form onSubmit={handleSubmit} className="search-bar">
            <div>
                <input type='str' value={query} className="input-style" placeholder='Search...' onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button type='submit' className='filter-button'><i className="fa-solid fa-filter fa-lg"></i></button>
            </div>
        </form>
     );
}

export default SearchBar;