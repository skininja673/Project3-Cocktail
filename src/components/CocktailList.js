import React, { useContext } from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';

const CocktailList = ({ loading, cocktails }) => {
    //if loading is true, render Loading component (animation circle)
    if (loading) {
        return <Loading />;
    }

    //if cocktails state array is empty, then render the message
    if (cocktails.length === 0) {
        return <h2 className="title">No cocktails matched </h2>;
    }

    return (
        <section className="section">
            <h2 className="title">cocktails</h2>
            <div className="cocktails-center">
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
};

export default CocktailList;
