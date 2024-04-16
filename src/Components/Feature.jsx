function Feature() {
  return (
    <div className="w-full py-10">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured projects</h1>
      </div>
      <div className="px-20">
        <div className="flex gap-10 cards w-full mt-10">
          <div className="cardcontainer relative w-1/2 h-[75vh]">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA67] font-['Founders Grotesk X-Condensed'] font-semibold z-[9] tracking-tighter leading-none text-8xl">
              {"FYDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-green-400 overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
            </div>
          </div>
          <div className="relative cardcontainer w-1/2 h-[75vh]">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA67] font-['Founders Grotesk X-Condensed'] font-semibold z-[9] tracking-tighter leading-none text-8xl">
              {"VIDE".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl bg-[#19181F] overflow-hidden">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
