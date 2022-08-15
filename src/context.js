import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import CocktailList from './components/CocktailList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//creating a react-context.
const AppContext = React.createContext();

// app provider
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    //we set search term to 'a' in order to display some cocktails, right when the page loads
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    //calling api
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
            console.log(err);

            //if there is any error, then setLoading to false
            setLoading(false);
        }
    };

    // every time the searchTerm changes, then call the api
    useEffect(() => {
        fetchDrinks();
    }, [searchTerm]);

    return (
        <>
            <AppContext.Provider value={{ loading, cocktails, setSearchTerm, searchTerm }}>{children}</AppContext.Provider>
        </>
    );
};

// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };

// exporting the context and the app
export { AppContext, AppProvider };
