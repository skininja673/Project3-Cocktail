import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import CocktailList from './components/CocktailList';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

//creating a react-context.
const AppContext = React.createContext();

// app provider
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('a');
    const [cocktails, setCocktails] = useState([]);

    return (
        <>
            <AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
                {children}
                {/* <CocktailList /> */}
            </AppContext.Provider>
        </>
    );
};

// export const useGlobalContext = () => {
//     return useContext(AppContext);
// };

// exporting the context and the app
export { AppContext, AppProvider };
