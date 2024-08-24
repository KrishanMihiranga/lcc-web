import Image from "next/image";
import background from '@/public/dashboardTeaBackground.png';
import DashboardButton from "../components/DashboardButton";

const Home = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-45 z-10"></div>
      <div className="relative flex flex-col items-start justify-center">
        <Image
          src={background}
          alt="Tea leaves background image for LCC Tea Collectors"
          className="w-full max-h-[850px] object-cover"
          style={{ objectPosition: 'center' }}
        />
        <div className="absolute z-20 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-48 py-8">
          <header className="text-white text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl leading-tight">
              LCC Tea <br /> Collectors
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              A legacy of quality since 1980
            </p>
          </header>
          <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
            <DashboardButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
