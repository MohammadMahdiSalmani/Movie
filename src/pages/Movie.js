import React from "react";
import { Link, useParams } from "react-router-dom"

import movies from "../movies";

const Movie = () => {
    const { id } = useParams()
    const movie = movies.find((item) => {
        return item._id === (id)
    })
    return (
        <div className="column column-xs-12 column-md-12 column-lg-12 page">
            <div className="row column-xs-12 column-md-12 column-lg-12 cover">
            <Link to="/" className="back"><svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="160 208 80 128 160 48" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline></svg>{movie.name}</Link>
                <img src={movie.image} alt="" className="row column-xs-12 column-md-12 column-lg-12" />
            </div>

            <div className="column column-xs-12 column-md-12 column-lg-12 information">
                <div className="row column-xs-12 column-md-12 column-lg-12 options">
                    <img src={movie.image} alt={movie.name} className="row column-xs-10 column-md-2 column-lg-2" />

                        <div className="row column-xs-10 column-md-7 column-lg-7 details">
                            <h2 className="row column-xs-12 column-md-12 column-lg-12">{movie.name}</h2>
                            <h5 className="row column-xs-12 column-md-12 column-lg-12">Genre: {movie.genre}</h5>
                            <h5 className="row column-xs-12 column-md-12 column-lg-12">IMDb rate: {movie.imdb}</h5>
                            <h5 className="row column-xs-12 column-md-12 column-lg-12">Release date: {movie.releaseDate}</h5>
                            <h5 className="row column-xs-12 column-md-12 column-lg-12">Running time: {movie.runningTime}</h5>
                            <div className="row column-xs-12 column-md-12 column-lg-12"><a href="<?php echo $row['link'] ?>" className="row column-xs-12 column-md-5 column-lg-5">Download</a></div>
                        </div>
                </div>

                <div className="row column-xs-12 column-md-12 column-lg-12 about">
                    <div className="column column-xs-12 column-md-7 column-lg-7 storyline">
                        <h3 className="row column-xs-8 column-md-8 column-lg-8">Story Line</h3>
                        <p className="row column-xs-10 column-md-8 column-lg-8">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Neque, minus ducimus pariatur, sunt possimus, animi dicta
                            recusandae architecto inventore harum quasi vel facere.
                            Laborum nulla, laboriosam odit rerum neque perferendis.
                        </p>
                    </div>

                    <div className="row column-xs-8 column-md-3 column-lg-3 cast">
                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>

                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>

                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>

                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>

                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>

                        <figure className="column column-xs-4 column-md-4 column-lg-4">
                            <img src={movie.image} alt="" className="row column-xs-10 column-md-10 column-lg-10" />
                                <figcaption className="row column-xs-12 column-md-12 column-lg-12">Emma Stone</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie