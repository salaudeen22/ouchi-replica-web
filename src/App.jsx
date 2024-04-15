import About from "./Components/About";
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
     
    </div>
  );
}

export default App;
