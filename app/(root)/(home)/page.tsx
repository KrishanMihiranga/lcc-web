import Footer from "../../../components/Footer";
import NavBar from "../../../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import PersonalStats from "./PersonalStats";
import Rates from "./Rates";
import Services from "./Services";


export default function Home() {
  return (
    <main>
      <NavBar />
      <HomePage />
      <About />
      <Rates />
      <Services />
      <Contact />
      <PersonalStats />
      <Footer />
    </main>
  );
}
