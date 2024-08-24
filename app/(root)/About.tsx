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
      <section id='about' className='flex flex-col lg:flex-row relative lg:px-48 px-8 py-24 space-y-12 lg:space-y-0'>
        <div className='relative flex justify-center lg:justify-start'>
          <Image src={collectingTeaBottom} alt="Woman displaying a handful of tea leaves" className='max-w-full lg:max-w-[450px]' />
          <Image src={collectingTeaTop} alt="Woman picking tea leaves from the field" className='max-w-full lg:max-w-[450px] absolute top-24 lg:top-32 left-8 lg:left-52' />
        </div>
        <div className='lg:ml-80 lg:w-1/2'>
          <header className='space-y-4'>
            <h3 className='text-[#04773B] text-lg font-medium'>About Us</h3>
            <h1 className='text-3xl lg:text-4xl font-bold leading-tight'>Quality Leaves, <span className='text-[#04773B]'>High Rates</span></h1>
            <div className='w-max'>
              <h2 className='text-2xl lg:text-3xl font-semibold'>With Exceptional Service</h2>
              <div className='flex items-center justify-between'>
                <div className='bg-[#04773B] w-3/4 h-[4px]'></div>
                <div className='bg-[#04773B] w-1/4 h-[4px]'></div>
              </div>
            </div>
          </header>
          <article className='mt-6 space-y-4 text-lg text-gray-700'>
            <p>Welcome to LCC Tea Collectors, where the art of tea leaf collection is celebrated!</p>
            <p>Located in a serene environment, our shop is a paradise for tea lovers and nature enthusiasts alike. Discover a world where every cup tells a unique story, and every leaf embodies a journey of passion and dedication.</p>
          </article>
          <div className='grid grid-cols-2 gap-4 mt-8'>
            <div className='flex items-center'>
              <Image src={highRates} alt="Paying high rates for tea leaves" className='w-12 h-12' />
              <small className='text-[#04773B] font-medium ml-4'>High Rates</small>
            </div>
            <div className='flex items-center'>
              <Image src={fertilizer} alt="Supplying essential ingredients for tea cultivation" className='w-12 h-12' />
              <small className='text-[#04773B] font-medium ml-4'>Supplies Ingredients</small>
            </div>
            <div className='flex items-center'>
              <Image src={customercare} alt="Customer-first service approach" className='w-12 h-12' />
              <small className='text-[#04773B] font-medium ml-4'>Customer Priority</small>
            </div>
            <div className='flex items-center'>
              <Image src={farmer} alt="Experienced staff working in the tea fields" className='w-12 h-12' />
              <small className='text-[#04773B] font-medium ml-4'>Experienced Staff</small>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-32 relative'>
        <div className='bg-black absolute top-0 w-full h-full opacity-50'></div>
        <Image src={teaGarden} alt="Scenic tea garden landscape" className='w-full object-cover max-h-[800px]' />
        <div className='absolute top-0 w-full h-full flex flex-col gap-8 items-center justify-center text-white text-center px-48'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-8'> The More Customers, The More Our Business Grows </h1>
          <div className='bg-[#F5F6F6] opacity-80 text-black flex flex-wrap justify-center gap-4 py-6 rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12'>
            <div className='border-r border-black pr-4 sm:pr-8 py-4 text-center'>
              <h1 className='text-[#04773B] text-3xl sm:text-4xl md:text-5xl font-bold'>300+</h1>
              <small className='text-black font-semibold text-xs sm:text-sm'>Registered Customers</small>
            </div>
            <div className='border-r border-black pr-4 sm:pr-8 py-4 text-center'>
              <h1 className='text-[#04773B] text-3xl sm:text-4xl md:text-5xl font-bold'>1K+ Kg</h1>
              <small className='text-black font-semibold text-xs sm:text-sm'>Daily Imports</small>
            </div>
            <div className='border-r border-black pr-4 sm:pr-8 py-4 text-center'>
              <h1 className='text-[#04773B] text-3xl sm:text-4xl md:text-5xl font-bold'>5</h1>
              <small className='text-black font-semibold text-xs sm:text-sm'>Associated Factories</small>
            </div>
            <div className='border-r border-black pr-4 sm:pr-8 py-4 text-center'>
              <h1 className='text-[#04773B] text-3xl sm:text-4xl md:text-5xl font-bold'>8 hrs</h1>
              <small className='text-black font-semibold text-xs sm:text-sm'>Daily Active Hours</small>
            </div>
            <div className='py-4 text-center'>
              <h1 className='text-[#04773B] text-3xl sm:text-4xl md:text-5xl font-bold'>216K Kg+</h1>
              <small className='text-black font-semibold text-xs sm:text-sm'>Annual Imports</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
