import React from "react";
import CardContainer from "../CardContainer/CardContainer"

const Carousel = () => {
    return (
        <>
            <h2 className="row column-xs-12 column-md-12 column-lg-12">Top Rate Movies</h2>

            <div className="column column-xs-12 column-md-12 column-lg-12 carousel">
                <CardContainer />
            </div>
        </>
    )
}

export default Carousel