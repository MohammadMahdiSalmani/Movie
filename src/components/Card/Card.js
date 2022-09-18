import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
    return (
        <Link to={`/movie/${movie._id}`} className="card">
            <img src={`${movie.image}`} alt="Movie's Poster" className="card-thumbnail" />

            <div className="info">
                <div>
                    <label className="card-name" title="">{movie.name}</label>
                    <label className="card-rate">IMDb: {movie.imdb}</label>
                    <label className="card-date">{movie.releaseDate}</label>
                </div>
            </div>
        </Link>
    )
}

export default Card