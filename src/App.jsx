import About from "./Components/About";
import Cards from "./Components/Cards";
import Eye from "./Components/Eye";
import Feature from "./Components/Feature";
import Landingpage from "./Components/Landingpage";
import Marquee from "./Components/Marquee";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="w-full m-h-screen  text-white bg-zinc-900">
      <Navbar />
      <Landingpage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Feature/>
      <Cards/>
     
    </div>
  );
}

export default App;
