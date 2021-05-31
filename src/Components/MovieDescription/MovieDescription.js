import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./MovieDescription.css";
const MovieDescription = ({movies}) => {
  
 const { title } = useParams();
  const [movie, setMovies] = useState("");
  useEffect(() => {
    const newMovie = movies.find((movie) => movie.title === title);
    setMovies(newMovie);
  }, []);

  return(
    <div>
    <Link to={"/"} className="btnhome">
   Home
    </Link>
      <div className="desc">
        <h4>Movie Description :</h4>
      <h5>Title : {movie.title}</h5>
      <h5> Year : {movie.description}</h5>
      <h5> Rate : {movie.rating}</h5>
    </div>
   
    <div className="trailer">
    <p>Movie Trailer</p>
    <iframe
        width="560"
        height="315"
        src={movie.trailerURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      </div>
    
  </div>
);
}
  
export default MovieDescription;