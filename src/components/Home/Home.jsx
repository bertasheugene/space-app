import React from "react";

export const Home = () => {
    return (

        <section className="home">
            <div className="home__wrapper">
                <div className="home__content">
                    <h1 className="home__title">Discover the vast expanses of <span className="t-pink">space</span></h1>
                    <p className="home__description">Where the possibilities are <span className="t-yellow">endless!</span></p>
                    <a href="/" className="btn btn-primary">Learn more</a>
                </div>    
            </div>
        </section>

    )
}