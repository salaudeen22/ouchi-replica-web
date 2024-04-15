import About from "./Components/About";
import Eye from "./Components/Eye";
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
     
    </div>
  );
}

export default App;
