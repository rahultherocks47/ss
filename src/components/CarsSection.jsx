import React from "react";
import car1 from "../assets/images/car1.webp";
import mercedes from "../assets/images/mercedes.webp";
import mini from "../assets/images/mini.webp";
import coaches from "../assets/images/coaches.webp";
import rolls from "../assets/images/rolls.webp";
import range from "../assets/images/range.webp";
import van from "../assets/images/van.webp";
import CarCard from "./CarCard";

const cars = [
  { title: 'Luxury Sedan', href: '#', image: car1, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
  { title: 'Luxury Sedan', href: '#', image: mercedes, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
  { title: 'Luxury Sedan', href: '#', image: mini, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
  { title: 'Luxury Sedan', href: '#', image:coaches, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
        { title: 'Luxury Sedan', href: '#', image:rolls, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
        { title: 'Luxury Sedan', href: '#', image:range, moreLink:"#",rates: [
          { label: 'Hourly Rate', value: '$50' },
          { label: 'Daily Rate', value: '$300' },
          { label: 'Weekly Rate', value: '$1800' },
        ], },
]


const CarsSection = () => {
  return (
    <section>
    <div className="container max-w-screen-xl mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center">
        Fleet-Luxury Executive Chauffeur Cars
      </h2>
      <h4 className="mt-2 text-center text-lg text-gray-600">Ready to cater you...</h4>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {cars.map((car) =>(
      <CarCard
        image={car.image}
        title={car.title }
        rates={car.rates}
        buttonText="BOOK THIS CAR"
        moreLink={car.moreLink}
      />))}
</div> 
</div>
</section>
);
};

export default CarsSection;