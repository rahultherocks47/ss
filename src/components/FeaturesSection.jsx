import React from 'react';
import FeatureCard from './FeatureCard';  
import  { ReactComponent as Shield} from '../assets/images/shield.svg';
import  { ReactComponent as Car} from '../assets/images/car.svg';
import {ReactComponent as Leaf} from '../assets/images/leaf.svg';
import mercedes from '../assets/images/mercedes.webp';
import mini from '../assets/images/mini.webp';

const features = [
  { title: 'Safety first', icon: Shield, description: 'Travel confidently knowing your safety is our top priority. We handle every detail with care to make sure your journey is nothing short of exceptional.' },
  { title: 'Private travel solutions', icon: Car, description: 'Discover your one-stop travel shop: long-distance rides, one way or return, by the hour, airport transfers, and more.' },
  { title: 'Sustainable travel', icon: Leaf, description: 'Breathe easy knowing all ride emissions are offset, as part of our global carbon offset program — the industry’s first.' },]

const FeaturesSection = () => {
  return (
    <section>
      <div className="bg-gray-200 px-2 py-10">
      <div id="features" className="mx-auto max-w-6xl">
        <p class="text-center text-base font-semibold leading-7 text-blue-500">Features</p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
        <div>
          <ul class="mt-16 grid grid-cols-1 gap-6 px-6 text-center text-slate-700 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
          </ul>
      </div>
      </div>
      </div>
    </section>
);
};

export default FeaturesSection;