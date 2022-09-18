import React from "react";
import Card from "../Card/Card";

import movies from "../../movies"

const CardContainer = () => {
    return (
        <div className="row column-xs-12 column-md-12 column-lg-12 card-container">
            {movies.map((item) => {
                return (
                    <Card key={item._id} movie={item} />
                )
            })}
        </div>
    )
}

export default CardContainer