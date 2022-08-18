import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

//hitting end point based on drink id
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
    //accessing id using useParams()
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    // call this api, only when we have 'id' available
    useEffect(() => {
        async function getCocktail() {
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();

                if (data.drinks) {
                    /* if there is a drink then destructure them and extract ingredient
                    data.drinks is an array
                    grab first element at index 0, which is a drink object and rename its properties
                    we know from console.log(data) that every drink has 4 ingredient only
                    but they are not in array, so we are destructuring them
                    */
                    const { strDrink: name, strDrinkThumb: image, strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = data.drinks[0];

                    //let create an array of strIngredients
                    const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4];

                    //now create a newCocktail object and replace with newer properties, that we created above
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    };

                    //update our setCocktail state
                    setCocktail(newCocktail);
                } else {
                    setCocktail(null);
                }
            } catch (err) {
                alert('Something is wrong');
            }
        }

        getCocktail();
    }, [id]);

    // if cocktail does not exist then render no cocktail
    if (!cocktail) {
        return <h2 className="title">No cocktail to display</h2>;
    }

    //destructure cocktail
    const { name, image, category, info, glass, instructions, ingredients } = cocktail;

    return (
        <section className="sc-container">
            <Link to="/" className="btn sc-btn">
                Go Back
            </Link>

            <h2 className="sc-title">{name}</h2>
            <div className="sc-drink">
                <img src={image} alt={name} />
                <div className="drink-detail">
                    <p>
                        <span className="drink-info">name:</span> {name}
                    </p>
                    <p>
                        <span className="drink-info">category:</span> {category}
                    </p>
                    <p>
                        <span className="drink-info">info:</span> {info}
                    </p>
                    <p>
                        <span className="drink-info">glass:</span> {glass}
                    </p>
                    <p>
                        <span className="drink-info">instructions:</span> {instructions}
                    </p>
                    <p>
                        <span className="drink-info">ingredients:</span>{' '}
                        {ingredients.map((item, index) => {
                            return <span key={index}> {item} </span>;
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SingleCocktail;
