import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./components/cardsList.css";

/*
  *used to be in the item='s place, but then we used an
  *object because that's more concise
  img={item.coverImg}
  rating={item.stats.rating}
  reviewCount={item.stats.reviewCount}
  location={item.location}
  title={item.title}
  price={item.price}
  openSpots={item.openSpots}

  we could also pass into the card item={item}, so pass in 
  an individual data element object, but then we'd have to use
  the .item in the card component code, so that would clatter 
  it a bit
*/
export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        //spreading all the properties of the current data element to the card component. this is somewhat doing the same thing as when we were passing in the individual data properties as props here
        {...item}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
