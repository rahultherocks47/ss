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
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              icon={feature.icon}
              description={feature.description}
            />
          ))}
      </div>
      </div>
    </section>
);
};

export default FeaturesSection;