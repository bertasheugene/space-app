import React from "react";

export const OfferItem = ({data, classItem}) => {
    return (

        <div className={`offer ${classItem}`}>

            <div className="offer__wrapper">

                <h3 className="offer__title">{data.title}</h3>
                <p className="offer__description">{data.description}</p>
                <a href={data.path} className="btn">Learn more</a>

            </div>

        </div>

    )
}   