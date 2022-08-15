import React, { useContext } from 'react';
// import { useGlobalContext } from '../context'
import { AppContext } from '../context';

const SearchForm = () => {
    const { setSearchTerm } = useContext(AppContext);

    //every time user type new drink, this function will set setSearchTerm to a new value;
    const searchCocktail = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="section search">
            <form className="search-form">
                <div className="form-control">
                    <label htmlFor="name">Search your favorite cocktail</label>
                    <input type="text" id="name" onChange={searchCocktail} />
                </div>
            </form>
        </section>
    );
};

export default SearchForm;
