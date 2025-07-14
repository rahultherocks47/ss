import React from "react";

const CarCard = ({
  image,
  title,
  rates,
  buttonText = "BOOK THIS CAR",
  moreLink = "#",
}) => {
  return (
    // transition-shadow duration-200 p-2
  <div className="group flex flex-col items-center bg-white rounded-lg shadow hover:shadow-xl p-4">
    <img
      src={image}
      alt={title}
      className="h-32 md:h-36 object-contain mb-4"
      draggable={false}
    />
    {/* text-lg font-bold text-center mb-4 uppercase tracking-wide */}
    <h3 className="text-lg font-bold text-center mb-4 uppercase tracking-wide inline-block border-b-2 border-transparent group-hover:border-dotted group-hover:border-gray-400 transition-all duration-200">
      {title}
    </h3>
    <dl className="w-full mb-6">
      {rates.map(({ label, value }, idx) => (
        <div
          key={idx}
          className="flex justify-between border-b border-dotted border-gray-300 py-1 text-sm"
        >
          <dt>{label}</dt>
          <dd className="font-semibold">{value}</dd>
        </div>
      ))}
    </dl>
    <button className="w-full bg-[#bfa76a] hover:bg-[#a48d4d] text-white font-semibold py-2 rounded transition flex items-center justify-center gap-2 mb-2">
      {buttonText}
      <span aria-hidden>→</span>
    </button>
    <a
      href={moreLink}
      className="text-xs text-black underline hover:text-[#bfa76a] text-center"
    >
      Find out more
    </a>
  </div>
);};

export default CarCard;