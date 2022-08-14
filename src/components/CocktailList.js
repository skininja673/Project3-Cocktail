import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
// import { useGlobalContext } from '../context'
import { AppContext } from '../context';

const CocktailList = () => {
    return (
        <div>
            <h2>cocktail list component</h2>
            <AppContext.Consumer>
                {(someValue) => {
                    return <h1>{someValue} Context is working</h1>;
                }}
            </AppContext.Consumer>
        </div>
    );
};

export default CocktailList;
