import React from "react";
import { offersList } from "./offersData";
import { OfferItem } from "./OfferItem";

function Offers () {
    return (

        <section className="offers">
            <div className="offers__wrapper">
                <h2 className="offers__title title">Offers</h2>
                <div className="offers__list">
                    {offersList.map(item => (
                        <OfferItem data={item}  key={item.id} classItem='offers__item'/>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Offers