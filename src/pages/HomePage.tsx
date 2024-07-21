// src/pages/HomePage.tsx
import React from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const HomePage: React.FC = () => {
    return (
        <div className='bg-[#0b1120] min-h-screen w-full text-white select-none'>
            <div className='flex py-4 px-6 gap-6 bg-[#1f2f59]'>
                <h1 className='text-white text-xl mt-1'>Welcome to FMDb</h1>
                <SearchBar />
            </div>
            <MovieList />
        </div>
    );
};

export default HomePage;
