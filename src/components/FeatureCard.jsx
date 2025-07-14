import React from "react";  

const FeatureCard = ({
  icon,
  title,
  description
}) => {
  // If icon is a function (React component), render it. Otherwise, treat as image src
  const Icon = icon;
  return (
    <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <Icon class="mx-auto h-10 w-10" />
        <h3 class="my-3 font-display font-medium">{title}</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          {description}
        </p>
      </li>
  );
};

export default FeatureCard;