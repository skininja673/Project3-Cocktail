import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import React, { useState, useEffect } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const Home = () => {
    const [loading, setLoading] = useState(false);
    //we set search term to 'a' in order to display some cocktails, that has letter 'a' in it
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    //calling api

    // every time the searchTerm changes, then call the api
    useEffect(() => {
        const fetchDrinks = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${url}${searchTerm}`);
                const data = await response.json();

                /*destructure the data object and grab only drinks
            drinks will either be some drink or null
            */
                const { drinks } = data;

                //if drinks is not null, then iterate over the drinks
                if (drinks) {
                    const newCocktails = drinks.map((item) => {
                        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                        //returning the object and renaming the properties that we got from api fetch
                        return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass };
                    });

                    //set the state of setCocktails
                    setCocktails(newCocktails);
                } else {
                    // if drinks is null, then setCocktails to empty
                    setCocktails([]);
                }

                //once we get something back, setLoading to false
                setLoading(false);
            } catch (err) {
                alert('some thing is wrong !');

                //if there is any error, then setLoading to false
                setLoading(false);
            }
        };

        fetchDrinks();
    }, [searchTerm]);

    return (
        <main>
            <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <CocktailList loading={loading} cocktails={cocktails} />
        </main>
    );
};

export default Home;
