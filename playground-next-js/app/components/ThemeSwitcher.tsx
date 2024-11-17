'use client';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeSwitcher = () => {
    const { toggleTheme } = useContext(ThemeContext);
    return (
        <>
            <button className='bg-purple-600 rounded p-2 text-white' onClick={toggleTheme}>Changer de thème</button>
        </>
    );
};

export default ThemeSwitcher;
