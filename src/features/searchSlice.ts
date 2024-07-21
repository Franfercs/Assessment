import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Key } from 'react';

interface Movie {
    id: Key | null | undefined;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface SearchState {
    query: string;
    results: Movie[];
    count: string,
    page: string,
    year: string,
    isLoading: boolean;
    error: string | null;
}

const initialState: SearchState = {
    query: '',
    results: [],
    count: '0',
    page: '1',
    year: '',
    isLoading: false,
    error: null,
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },
        setSearchResults(state, action: PayloadAction<Movie[]>) {
            state.results = action.payload;
            state.isLoading = false;
        },
        setCount(state, action: PayloadAction<string>) {
            state.count = action.payload;
        },
        setPage(state, action: PayloadAction<string>) {
            state.page = action.payload;
        },
        setYear(state, action: PayloadAction<string>) {
            state.year = action.payload;
        },
        setLoading(state) {
            state.isLoading = true;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
            state.isLoading = false;
        },
        clearError(state) {
            state.error = null;
        },
    },
});

export const { setSearchQuery, setSearchResults, setCount, setPage, setYear, setLoading, setError, clearError } = searchSlice.actions;

export default searchSlice.reducer;