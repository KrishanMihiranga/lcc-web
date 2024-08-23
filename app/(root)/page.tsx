import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import About from "./About";
import Contact from "./Contact";
import HomePage from "./HomePage";
import Rates from "./Rates";
import Services from "./Services";


export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HomePage />
        <About />
        <Rates />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>


  );
}
