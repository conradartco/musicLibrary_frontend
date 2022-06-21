import React, { useState } from 'react';


const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newQuery = {
            query: query
        };
        console.log(newQuery);
        props.queryData(newQuery)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type='str' value={query} onChange={(event) => setQuery(event.target.value)}/>
        </form>
     );
}

export default SearchBar;