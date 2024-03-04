import Button from "./components/Button.jsx"
import Header from "./components/Header.jsx"
import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx"
import Collaboration from "./components/Collaboration.jsx";
import Services from "./components/Services.jsx";
import Pricing from "./components/Pricing.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Footer from "./components/Footer.jsx";
const App = () => {

  return (
    <>
      <div className="pt-[4.75rem0 lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}

export default App
