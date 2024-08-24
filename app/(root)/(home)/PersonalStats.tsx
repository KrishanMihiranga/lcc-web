"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Lottie from 'lottie-react';
import herearrow from '@/public/herearrow.json';
import LoadingPage from '@/components/LoadingPage';

const PersonalStats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleNavigation = (href: string) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(href);
    }, 500);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <section id="personal-stats" className="bg-[#F5F6F6] text-[#204E3D] py-16 px-6 md:px-16 relative pb-36">
            <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-[#04773B] to-[#2D6E59] opacity-30"></div>
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
              <div className="relative flex-1 mb-12 md:mb-0">
                <Lottie
                  animationData={herearrow}
                  loop
                  className="mx-auto w-36 md:w-48 absolute top-0 left-0 transform -translate-x-1/2 -translate-y-36 rotate-90 hidden md:block"
                />
                <div className="relative z-10 text-center md:text-left">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                    <span className="block">Want to Track Your</span>
                    <span className="block text-[#04773B]">Contributions?</span>
                  </h2>
                  <p className="text-lg md:text-xl lg:text-2xl text-[#204E3D] leading-relaxed mb-8">
                    Discover how much you&apos;ve contributed to our company. Keep track of your personal stats with ease and see how your dedication helps us grow.
                  </p>

                  <button
                    className="text-xl md:text-2xl bg-[#04773B] text-white hover:bg-[#366150] transition-colors px-8 py-4 rounded-md shadow-lg"
                    aria-label="View Personal Stats"
                    onClick={() => handleNavigation('/login')}
                  >
                    View Personal Stats
                  </button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="absolute inset-0 bg-[#04773c44] transform -rotate-6 rounded-lg"></div>
                <div className="relative z-10 p-8 bg-[#F9F9F9] rounded-lg shadow-lg border border-[#04773B]">
                  <h3 className="text-2xl font-semibold mb-4 text-[#204E3D]">Your Insights</h3>
                  <p className="text-lg text-[#204E3D] mb-6">
                    Track and visualize your contributions with detailed insights and stats. Monitor your impact on our business and see your progress over time.
                  </p>
                  <ul className="list-disc list-inside text-[#204E3D]">
                    <li className="mb-2">Total Contributions</li>
                    <li className="mb-2">Recent Achievements</li>
                    <li className="mb-2">Contribution Trends</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PersonalStats;