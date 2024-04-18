import { motion, useAnimation } from "framer-motion";

function Feature() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({
      y: "0%",
    });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({
      y: "100%",
    });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-3xl sm:text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="feature-card flex flex-col md:flex-row  gap-10 cards w-full mt-10">
          <motion.div
            onHoverStart={() => {
              handleHover(0);
            }}
            onHoverEnd={() => {
              handleHoverEnd(0);
            }}
            className="relative cardcontainer  sm:w-1/2 sm:h-[75vh]"
          >
            <h1 className="absolute flex right-0 overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA67] font-['Founders Grotesk X-Condensed'] font-semibold z-[9] tracking-tighter leading-none text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  animate={cards[0]}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-400 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => {
              handleHover(1);
            }}
            onHoverEnd={() => {
              handleHoverEnd(1);
            }}
            className="relative cardcontainer w-1/2 h-[75vh]"
          >
            <h1 className="absolute flex right-full overflow-hidden translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA67] font-['Founders Grotesk X-Condensed'] font-semibold z-[9] tracking-tighter leading-none text-8xl">
              {"VIDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  animate={cards[1]}
                  key={index}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#19181F] overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
