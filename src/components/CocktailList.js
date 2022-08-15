import React, { useContext } from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
// import { useGlobalContext } from '../context'
import { AppContext } from '../context';

const CocktailList = () => {
    //accessing the cocktails and loading state send by provider from  context.js
    const { cocktails, loading } = useContext(AppContext);

    //if loading is true, render Loading component (animation circle)
    if (loading) {
        return <Loading />;
    }

    //if cocktails state array is empty, then render the message
    if (cocktails.length === 0) {
        return <h2 className="title">No cocktails matched </h2>;
    }

    return <h1>oh</h1>;
};

export default CocktailList;
