import React from "react";
import ReactDOM from "react-dom";
import CardCountry from "./components/CardCountry";
import Header from "./components/Header";
import PlacesData from "./PlaceData.js";

const Application = () => {

    const cardsPlaces = PlacesData.map(local => <CardCountry local={local} />);
    return (
        <>
           <Header title="Travel Journal." icon="earth-outline" />
           {cardsPlaces}
        </>
    )
} 

ReactDOM.render(<Application /> , document.getElementById("root"));