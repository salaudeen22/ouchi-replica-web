
import Cards from "./Components/Cards";
import Eye from "./Components/Eye";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Landingpage from "./Components/Landingpage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import "./App.css"

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full m-h-screen  text-white bg-zinc-900">
      <Navbar />
      <Landingpage />
      <Marquee />
  
      <Eye />
      <Feature />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
