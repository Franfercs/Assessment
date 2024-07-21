// src/components/MovieList.tsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setSearchQuery, setLoading, setSearchResults, setCount, setError } from '../features/searchSlice';
import MovieCard from './MovieCard';
import { getAll } from '../api';
import Pagination from './Pagination';

const MovieList: React.FC = () => {
    const { results, query, count, page, isLoading, error } = useSelector((state: RootState) => state.search);
    const [pageNumber, setPageNumber] = useState(page);
    const dispatch = useDispatch();

    const handleSearch = async () => {
        dispatch(setLoading());
        dispatch(setError(null));
        try {
            const results = await getAll(query, pageNumber);
            dispatch(setSearchResults(results.Search));
        } catch (error) {
            if (error instanceof Error)
                dispatch(setError(error.message));
        }
    };

    useEffect(() => {
        handleSearch();
    }, [pageNumber])

    if (isLoading) {
        return <div className='w-full flex'><div className='mx-auto'>Loading...</div></div>;
    }

    if (error) {
        return <div className='w-full h-1/2 flex'><div className='mx-auto mt-10'>{query === '' ? 'Please search for a movie title' : `Error: ${error}`}</div></div>;
    }

    return (
        <div className='px-20 mt-4 pb-10'>
            {query && <p>Results for: {query} {`(${count})`}</p>}
            <div className='grid sm:grid-cols-5 grid-cols-3 gap-6 mt-6'>
                {results.map(movie => (
                    <MovieCard title={movie.Title} poster={movie.Poster} id={movie.imdbID} key={movie.imdbID} />
                ))}
            </div>
            <Pagination
                moviesPerPage={10}
                totalMovies={parseInt(count)}
                paginate={setPageNumber}
                currentPage={parseInt(pageNumber)}
            />
        </div>
    );
};

export default MovieList;
