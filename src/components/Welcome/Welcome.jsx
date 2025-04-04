import React from "react";

export const  Welcome = () => {

    return (
        <section className="welcome">
            <h2 className="welcome__title">Embark on a space journey</h2>

                
            <div className={`welcome__content`}>
                <input type="checkbox" id="welcome__checkbox" className="welcome__checkbox"/>

                <div className="welcome__text">
                    <p>Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.</p>       
                </div>
                
                <label htmlFor="welcome__checkbox" className="welcome__label" aria-hidden="true" aria-label="Show text"></label>
            </div>


        </section>
    )
}