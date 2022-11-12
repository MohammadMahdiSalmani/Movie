import React from "react";
import { Link } from "react-router-dom"

const XsNavigation = () => {
    return (
        <nav id="mobile-navigation" class="row column-xs-11 md-hidden lg-hidden">
            <Link to="/" class="row column-xs-3"><svg class="column-xs-4" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></Link>
            <Link to="" class="row column-xs-3"><svg class="column-xs-4" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="116" cy="116" r="84" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle><line x1="175.4" y1="175.4" x2="224" y2="224" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line></svg></Link>
            <Link to="" class="row column-xs-3"><svg class="column-xs-4" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="96" r="64" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="16"></circle><path d="M31,216a112,112,0,0,1,194,0" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg></Link>
        </nav>
    )
}

export default XsNavigation