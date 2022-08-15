import React, { useContext } from 'react';
// import { useGlobalContext } from '../context'
import { AppContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useContext(AppContext);
    console.log('this is a setsearch: ', setSearchTerm);
    return (
        <div>
            <h2 className="title">Search form component</h2>
        </div>
    );
};

export default SearchForm;
