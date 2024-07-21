// src/pages/HomePage.tsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import YearFilter from '../components/YearFilter';
import Modal from '../components/Modal';

const HomePage: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='bg-[#0b1120] min-h-screen w-full text-white select-none'>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} content={<SearchBar closeModal={() => setIsOpen(false)} />} />
            <div className='flex py-2 sm:py-4 px-3 sm:px-6 justify-between sm:justify-start gap-6 bg-[#1f2f59]'>
                <h1 className='text-white text-md sm:text-xl my-auto'>Welcome to FMDb</h1>
                {window.innerWidth > 640 ? <SearchBar closeModal={() => setIsOpen(false)} /> : <button className='bg-[#0ea5e9] my-auto text-white h-fit py-2 px-3 rounded-lg' onClick={() => setIsOpen(true)}>Search</button>}
                <YearFilter />
            </div>
            <MovieList />
        </div>
    );
};

export default HomePage;
