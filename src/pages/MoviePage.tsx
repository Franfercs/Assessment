import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../api';
import Test from '../assets/Test.jpg'

interface MovieDetailsParams {
    id: string;
}

interface MovieDetailsResponse {
    Title: string;
    Year: string;
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
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
    Type: string;
    DVD: string;
    BoxOffice: string;
    Production: string;
    Website: string;
    Response: string;
}

const MoviePage: React.FC = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState<MovieDetailsResponse | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchMovieDetails = async (id: string | undefined) => {
            try {
                const data = await getOne(id);
                setMovie(data);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails(id);
    }, [id]);

    if (!movie) {
        return <div className='w-full min-h-screen flex bg-[#0b1120] text-white'><div className='mx-auto my-auto'>Loading...</div></div>;
    }

    return (
        <div className="bg-[#0b1120] min-h-screen text-white flex flex-col">
            <div className='flex py-4 px-6 gap-6 bg-[#1f2f59]'>
                <h1 onClick={() => navigate('/')} className='text-white cursor-pointer text-xl mt-1'>{`< Back`}</h1>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start px-8 sm:px-16 py-8 ">
                <img src={movie.Poster !== 'N/A' ? movie.Poster : Test} alt={movie.Title} className="w-[300px] sm:w-[480px] h-[400px] sm:h-[600px] rounded-lg shadow-md" />
                <div className="sm:ml-8 mt-4 sm:mt-0 mx-auto">
                    <h1 className="text-3xl font-bold">{movie.Title} ({movie.Year})</h1>
                    <p className="text-lg mt-2 sm:mt-0"><strong>Genre:</strong> {movie.Genre}</p>
                    <p className="text-lg"><strong>Director:</strong> {movie.Director}</p>
                    <p className="text-lg"><strong>Actors:</strong> {movie.Actors}</p>
                    <p className="mt-4"><strong>Plot:</strong> {movie.Plot}</p>
                    <p className="mt-4"><strong>Language:</strong> {movie.Language}</p>
                    <p className="mt-4"><strong>Country:</strong> {movie.Country}</p>
                    <p className="mt-4"><strong>Awards:</strong> {movie.Awards}</p>
                    <p className="mt-4"><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
                    <p className="mt-4"><strong>Metascore:</strong> {movie.Metascore}</p>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
