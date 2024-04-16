import { motion } from "framer-motion"
import About from "./About"



function Marquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="1" className="w-full py-20 rounded-tr-3xl rounded-tl-3xl bg-green-900">
        <div className="text border-t-2 border-b-2 border-zinc-300 flex  overflow-hidden whitespace-nowrap">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[17vw] leading-none   font-['Founders Grotesk X-Condensed'] uppercase  font-semibold  ">We are Street2Site</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[17vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase font-semibold ">We are Street2Site</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:5}} className="text-[17vw] leading-none  font-['Founders Grotesk X-Condensed'] uppercase font-semibold ">We are Street2Site</motion.h1>

        </div>
        <About />
        
    </div>
  )
}

export default Marquee