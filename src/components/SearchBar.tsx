import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setLoading, setSearchResults, setCount, setError } from '../features/searchSlice';
import { getAll } from '../api';
import { RootState } from '../store/store';

interface SearhBarComponent {
    closeModal: () => void;
}

const SearchBar: React.FC<SearhBarComponent> = ({ closeModal }) => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const isMobile = window.innerWidth < 640;
    const { year } = useSelector((state: RootState) => state.search);

    const handleSearch = async () => {
        dispatch(setLoading());
        dispatch(setError(null));
        try {
            const results = await getAll(input, '1', year);
            dispatch(setSearchQuery(input));
            dispatch(setCount(results.totalResults));
            dispatch(setSearchResults(results.Search));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setError(error.message));
                dispatch(setSearchQuery(input));
                dispatch(setCount('0'));
                dispatch(setSearchResults([]));
            }

        }
        if (window.innerWidth <= 640)
            closeModal();
    };

    return (
        <div className='flex my-auto self-center'>
            <input
                type="text"
                value={input}
                className='bg-[#1f2a3c] max-w-72 w-full h-fit rounded-l-lg py-2 px-4 text-white focus:ring-0 focus:outline-none '
                placeholder='Enter a movie title'
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch()
                    }
                }}
            />
            <button className='bg-[#0ea5e9] text-white h-fit py-2 px-3 rounded-r-lg' onClick={handleSearch}>Search</button>
        </div>
    );
};

export default SearchBar;
