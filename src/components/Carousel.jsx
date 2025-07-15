import React, { useEffect, useState } from "react";

const images = [
  "https://source.unsplash.com/800x400/?nature,water",
  "https://source.unsplash.com/800x400/?nature,forest",
  "https://source.unsplash.com/800x400/?nature,mountain",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl h-15 mx-auto overflow-hidden rounded-lg shadow-lg">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
