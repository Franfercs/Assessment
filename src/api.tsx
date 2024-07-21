import axios from 'axios';
import { Key } from 'react';

const API_URL = 'http://www.omdbapi.com/';
const API_KEY = process.env.REACT_APP_API_KEY; // Make sure to add your API key in your .env file

if (!API_KEY) {
    throw new Error('OMDB API key is missing. Please add it to your .env file.');
}

interface Movie {
    id: Key | null | undefined;
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

interface MovieDetail extends Movie {
    Error: string | undefined;
    Rated: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Awards: string;
    Ratings: Array<{ Source: string; Value: string }>;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

interface GetMoviesResponse {
    Error: string | undefined;
    Search: Movie[];
    totalResults: string;
    Response: string;
}

export const getAll = async (query: string, page: string): Promise<GetMoviesResponse> => {
    try {

        const response = await axios.get<GetMoviesResponse>(API_URL, {
            params: {
                s: query,
                apikey: API_KEY,
                page: page,
            },
        });

        if (response.data.Response === 'True') {
            return response.data;
        } else {
            throw new Error(response.data.Error);
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const getOne = async (id: string | undefined): Promise<MovieDetail> => {
    try {
        const response = await axios.get<MovieDetail>(API_URL, {
            params: {
                i: id,
                apikey: API_KEY,
            },
        });

        if (response.data.Response === 'True') {
            return response.data;
        } else {
            throw new Error(response.data.Error);
        }
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};
