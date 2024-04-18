import { motion } from "framer-motion";
import { useState } from "react";

function About() {
  const [animation, setAnimation] = useState(false);

  return (
    <div className="w-full p-20 bg-[#CDEA67] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
      </h1>
      <div className="flex md:flex-row flex-col w-full border-t-[2px] mt-20 pt-10 border-bg-[#a0b84c]">
        <div className="w-1/2">
          <h1 className="text-3xl sm:text-6xl">Our approach</h1>
          <motion.button
            transition={{ duration: 0.3, ease: [0.12, 0, 0.39, 0] }}
            onHoverStart={() => setAnimation(true)}
            onHoverEnd={() => setAnimation(false)}
            className={`flex gap-10 items-center px-20 py-6 text-sm sm:px-10 sm:py-6 mt-10 ${animation ? 'bg-zinc-900' : 'bg-zinc-700'} rounded-full text-white`}
          >
            READ MORE
            <div className="w-2 h-2 sm:w-2 sm:h-2 bg-zinc-100 rounded-full"></div>
          </motion.button>
        </div>
        <motion.div 
          transition={{ duration: 0.1, ease: [0.12, 0, 0.39, 0] }} 
          className={`mt-10 w-full h-full sm:w-1/2 sm:h-[70vh] ${animation ? 'scale-90' : ''}`}
        >
          <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className="rounded-3xl w-full h-full" />
        </motion.div>
      </div>
    </div>
  );
}

export default About;
