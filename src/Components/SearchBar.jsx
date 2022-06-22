import React, { useState } from 'react';


const SearchBar = (props) => {

    const [query, setQuery] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newQuery = query;
        console.log(newQuery);
        props.queryData(newQuery)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <input type='str' value={query} onChange={(event) => setQuery(event.target.value)}/>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
     );
}

export default SearchBar;