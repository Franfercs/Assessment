import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setLoading, setSearchResults, setCount, setYear, setError } from '../features/searchSlice';
import { getAll } from '../api';
import { RootState } from '../store/store';

const YearFilter: React.FC = () => {
    const dispatch = useDispatch();
    const { results, query, count, page, isLoading, error } = useSelector((state: RootState) => state.search);
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());
    const [selectedYear, setSelectedYear] = useState('');

    const handleSearch = async () => {
        dispatch(setLoading());
        dispatch(setError(null));
        try {
            const results = await getAll(query, '1', selectedYear);
            dispatch(setYear(selectedYear));
            dispatch(setSearchQuery(query));
            dispatch(setCount(results.totalResults));
            dispatch(setSearchResults(results.Search));
        } catch (error) {
            if (error instanceof Error)
                dispatch(setError(error.message));
        }
    };

    useEffect(() => {
        handleSearch();
    }, [selectedYear])

    return (
        <select className='px-1 sm:px-4 bg-[#1f2a3c] rounded-lg' value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">All Years</option>
            {years.map((year) => (
                <option key={year} value={year}>
                    {year}
                </option>
            ))}
        </select>
    );
};

export default YearFilter;