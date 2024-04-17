import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  const [background, setBackground] = useState(false);

  const handleHoverStart = () => {
    setBackground(true);
  };

  const handleHoverEnd = () => {
    setBackground(false);
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.8"
      className="w-full h-screen bg-zinc-900 text-white pt-1"
    >
      <div className="textStructure mt-40 px-20">
        {["We create", "eye-OPening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker ">
              <div className="w-fit flex items-end overflow-hidden">
                {index == 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-[1vw] w-[8vw] rounded-md h-[5.8vw] -top-[0.6vw] relative bg-green-500"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                      className="w-full h-full"
                    />
                  </motion.div>
                )}
                <h1 className=" uppercase text-[9vw]  sm:text-[9vw] md:text-[9vw] md:leading-[7vw]  font-['Founders Grotesk X-Condensed']  font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="menus border-t-2 mt-32 border-zinc-800 sm:flex sm:justify-between sm:items-center py-5 sm:px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p
              key={index}
              className="menus-items text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          );
        })}
        <motion.div
          className="menus-items start flex items-center gap-1 "
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
         
        >
          <div className={`px-5 py-2 border-[1px] ${background && 'bg-zinc-200'}border-zinc-500 font-light text-md rounded-full uppercase`}>
            Start the Project
          </div>
          <div className={`w-10 h-10 border-[1px] ${background && 'bg-zinc-200'  } border-zinc-500 rounded-full flex justify-center items-center`}>
            <span className="rotate-[45deg]">
              <FaArrowUpLong style={{ fontSize: "1.6vw" }} />
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Landingpage;
