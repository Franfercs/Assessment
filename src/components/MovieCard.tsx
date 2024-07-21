import React, { Key } from 'react';
import Test from '../assets/Test.jpg'
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
    id: Key;
    title: string;
    poster: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, poster, id }) => {

    const navigate = useNavigate();

    return (
        <div key={id} onClick={() => navigate(`/${id}`)} className='flex flex-col w-fit h-fit cursor-pointer rounded-lg overflow-clip bg-[#1f2a3c]'>
            <div>
                <img className='object-cover w-72 h-96' src={poster !== 'N/A' ? poster : Test} alt={title} />
            </div>
            <div className='bg-[#1f2a3c] py-1.5 px-2 text-white select-none line-clamp-1'>
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default MovieCard;
