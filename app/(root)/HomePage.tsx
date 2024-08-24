import Image from "next/image";
import background from '@/public/dashboardTeaBackground.png';
import DashboardButton from "../components/DashboardButton";

const Home = () => {
  return (
    <section id="home">
      <div>
        <Image src={background}
          alt="Tea leaves background image for LCC Tea Collectors"
        />
        <div>
          <header>
            <h1>LCC Tea Collectors</h1>
            <p className="text-lg font-semibold">A legacy of quality since 1980</p>
          </header>
          <DashboardButton />
        </div>
      </div>
    </section>
  );
};

export default Home;
