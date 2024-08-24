import React from 'react';
import Image from 'next/image';
import collectingTeaTop from '@/public/collectingTeaTop.png';
import collectingTeaBottom from '@/public/collectingTeaBottom.png';
import highRates from '@/public/revenue.png';
import farmer from '@/public/farmer.png';
import fertilizer from '@/public/fertilizer.png';
import customercare from '@/public/customerCare.png';
import teaGarden from '@/public/TeaGardenBackground.png';

const About = () => {
  return (
    <>
      <section id='about'>
        <div>
          <Image src={collectingTeaTop} alt="Woman displaying a handful of tea leaves" />
          <Image src={collectingTeaBottom} alt="Woman picking tea leaves from the field" />
        </div>
        <div>
          <header>
            <h3>About Us</h3>
            <h1>Quality Leaves, High Rates</h1>
            <h2>With Exceptional Service</h2>
          </header>
          <article>
            <p>Welcome to LCC Tea Collectors, where the art of tea leaf collection is celebrated!</p>
            <p>Located in a serene environment, our shop is a paradise for tea lovers and nature enthusiasts alike. Discover a world where every cup tells a unique story, and every leaf embodies a journey of passion and dedication.</p>
          </article>
          <div>
            <div>
              <Image src={highRates} alt="Paying high rates for tea leaves" />
              <small>High Rates</small>
            </div>
            <div>
              <Image src={fertilizer} alt="Supplying essential ingredients for tea cultivation" />
              <small>Supplies Ingredients</small>
            </div>
            <div>
              <Image src={customercare} alt="Customer-first service approach" />
              <small>Customer Priority</small>
            </div>
            <div>
              <Image src={farmer} alt="Experienced staff working in the tea fields" />
              <small>Experienced Staff</small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Image src={teaGarden} alt="Scenic tea garden landscape" />
        <div>
          <h1>The More Customers, The More Our Business Grows</h1>
          <div>
            <div>
              <h1>300+</h1>
              <small>Registered Customers</small>
            </div>
            <div>
              <h1>1000+ Kg</h1>
              <small>Daily Imports</small>
            </div>
            <div>
              <h1>5</h1>
              <small>Associated Factories</small>
            </div>
            <div>
              <h1>8 hrs</h1>
              <small>Daily Active Hours</small>
            </div>
            <div>
              <h1>216K+ Kg</h1>
              <small>Annual Imports</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
