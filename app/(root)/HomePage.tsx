import Image from "next/image";
import background from '@/public/dashboardTeaBackground.png';
import DashboardButton from "../components/DashboardButton";

const Home = () => {
  return (
    <section id="home" className="relative">
      <div className="bg-black absolute w-full h-full z-10 opacity-45"></div>
      <div className="relative flex flex-col items-start justify-center">
        <Image
          src={background}
          alt="Tea leaves background image for LCC Tea Collectors"
          className="w-full max-h-[850px] object-cover"
        />
        <div className="absolute z-10 px-32">
          <header className="text-white">
            <h1 className="text-9xl">LCC Tea  <br /> Collectors</h1>
            <p className="text-lg">A legacy of quality since 1980</p>
          </header>
          <DashboardButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
