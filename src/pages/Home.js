import React from "react";
import Footer from "../components/Footer/Footer";
import CarouselContainer from "../components/CarouselContainer/CarouselContainer"
import Navigation from "../components/Navigations/Navigation/Navigation";
import XsNavigation from "../components/Navigations/XsNavigation/XsNavigation";

const Home = () => {
    return (
        <React.Fragment>
            <Navigation />
            <CarouselContainer />
            <XsNavigation />
            <Footer />
        </React.Fragment>
    )
}

export default Home