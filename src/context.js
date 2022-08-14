import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import CocktailList from './components/CocktailList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//creating a react-context
const AppContext = React.createContext();

// app provider
const AppProvider = ({ children }) => {
    return (
        <>
            <AppContext.Provider value="error">
                {children}
                <CocktailList />
            </AppContext.Provider>
        </>
    );
};

// exporting the context and the app
export { AppContext, AppProvider };
