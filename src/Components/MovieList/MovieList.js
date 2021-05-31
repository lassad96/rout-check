import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Cards/Card'
const MovieList = ({movies}) => {
	return (
		<>
			{movies.map((movie, index) => (
			<Link to={`/movie/${movie.title}`}>
            <Card movie={movie} key={index}/>			
			</Link>
			))}
		</>
	);
};

export default MovieList;
