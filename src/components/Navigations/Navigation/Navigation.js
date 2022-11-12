import React from "react";
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <nav id="navigation" class="row xs-hidden column-md-12 column-lg-12">
            <ul className="row column-md-8 column-lg-8">
                <li className="row column-md-2 column-lg-2"><Link to="" className="active">Home</Link></li>
                <li className="row column-md-2 column-lg-2"><Link to="">Search</Link></li>
                <li className="row column-md-2 column-lg-2"><Link to="">Profile</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation