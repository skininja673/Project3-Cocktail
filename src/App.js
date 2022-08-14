import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    const [cocktails, setCocktails] = useState([]);
    const fetchDrinks = async () => {
        const response = await fetch(url);
        const data = await response.json();

        const { drinks } = data;
        if (drinks) {
            const newCocktails = drinks.map((item) => {
                const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;

                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                };
            });
            setCocktails(newCocktails);
        } else {
            setCocktails([]);
        }
        console.log(cocktails);
    };

    useEffect(() => {
        fetchDrinks();
    }, []);

    return (
        <div className="App">
            <h1>Welcome</h1>
            <h2>Testing the api link.....</h2>
            <h3>Please check the console log to see the data from api</h3>
            {cocktails.map((cocktail) => {
                return <img src={cocktail.image} alt="" />;
            })}
        </div>
    );
}

export default App;
