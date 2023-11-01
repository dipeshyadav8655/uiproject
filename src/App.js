import "./App.css";
import About from "./Component/About";
import CTOorVP from "./Component/CTOorVP";
import DesignConference from "./Component/DesignConference";
import Footer from "./Component/Footer";
import GetInTouch from "./Component/GetInTouch";
import Guide from "./Component/Guide";
import Hero from "./Component/Hero";
import Nav from "./Component/Nav";
import Slider from "./Component/Slider";
import Team from "./Component/Team";


function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Slider />
      <CTOorVP />
      <Guide />
      <DesignConference />
      <Team />
      <About />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
