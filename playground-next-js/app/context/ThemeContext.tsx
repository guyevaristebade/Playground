'use client';

import React, { createContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark';

interface ThemeContextProps{
    theme : Theme;
    toggleTheme : () => void;
}

interface ThemeContextProviderProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
}) 

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }

    useEffect(() =>{
        const storedTheme = localStorage.getItem('theme') as Theme;
        if(storedTheme){
            setTheme(storedTheme)
        }
    },[])
    

    return (
        <ThemeContext.Provider value={{ theme , toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

