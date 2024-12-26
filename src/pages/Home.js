import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import { Link } from 'react-router-dom';
import Services from '../Components/Services';

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Luxurious Rooms" subtitle="Deluxe rooms starting at $299">
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
    </>
  );
}
