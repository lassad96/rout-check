import React from "react";
import StarRatings from "react-star-ratings";

  

const Card = ({ movie }) => {
          return (

   
            <div className="card" style={{width: '18rem'}}>
              <img src={movie.poster} className="card-img-top" alt={movie.title} />
              
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{movie.title}</li>
                <li className="list-group-item">{movie.description}</li>
      
                <StarRatings
          rating={movie.rating}
          starRatedColor="yellow"
          numberOfStars={5}
          name='rating'
          starDimension="25px"
          starSpacing="10px"
        />
        
              </ul>
              
            </div>
          );
       
};


export default Card;