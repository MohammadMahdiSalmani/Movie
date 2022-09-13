import React from "react";
import Wrapper from "../../hoc/Wrapper/Wrapper";
import CarouselContainer from "../CarouselContainer/CarouselContainer";

class Layout extends React.Component {
    render() {
        return (
            <Wrapper>
                <main className="column column-xs-12 column-md-12 column-lg-12">
                    <CarouselContainer />
                </main>
            </Wrapper>
        )
    }
}

export default Layout