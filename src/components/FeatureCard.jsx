import React from "react";  

const FeatureCard = ({
  icon,
  title,
  description
}) => {
  // If icon is a function (React component), render it. Otherwise, treat as image src
  const Icon = icon;
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center h-full border border-gray-100">
      <div className="flex items-center flex-rows justify-center mb-4 h-1/2">
      <div class="w-16 h-16">
      <Icon className="w-full h-full flex flex-left"/>
      </div>
      <h3 className="text-xl font-semibold text-center mb-2 ml-3">{title}</h3>
      </div>
      <p className="text-gray-600 text-center text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;