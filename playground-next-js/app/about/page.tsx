'use client';
import React from 'react'
import { useTheme } from '../hook/use-theme';

const AboutPage = () => {
    const { theme } = useTheme();

    return (
        <div className={`min-h-screen transition-all duration-1000 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} `}>Page About</div>
    )
}

export default AboutPage;