import { createContext, useState, useContext } from 'react';

const portafolioContext = createContext();

const portafolioProvider = ( { children }) => {

	const [menuOpen, setMenuOpen] = useState(false);

	return (
        <portafolioContext.Provider
            value={
            {
                menuOpen,
                setMenuOpen
            }
            }
        >
            { children }
        </portafolioContext.Provider>
    );
};

const useApi = () => {
	const context = useContext(portafolioContext);
	if (context === undefined) {
		const error = 'Not exist context';
		throw error;
	}
	return context;
};

export { useApi, portafolioProvider };
