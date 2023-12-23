import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];
export default function Carousel() {
  const [currentIndex, SetCurrentIndex] = useState(0);

  function handleIncrease() {
    SetCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleDecrease() {
    SetCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="container">
      <center>
        <h1>Project 1: Carousel</h1>
        <div className="carousel">
          <button onClick={handleIncrease}>← </button>
          <Image currentIndex={currentIndex} />
          <button onClick={handleDecrease}>→ </button>
        </div>
      </center>
    </div>
  );

  function Image({ currentIndex }) {
    return (
      <div className="ImageContainer">
        <img src={images[currentIndex]} alt="newimage" />
      </div>
    );
  }
}
