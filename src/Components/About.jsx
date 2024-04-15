

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA67]  rounded-tl-3xl rounded-tr-3xl text-black">

        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>


        <div className=" flex w-full border-t-[2px] mt-20 pt-10 border-bg-[#a0b84c] ">
            <div className="w-1/2">
                <h1 className="text-6xl">Our approach</h1>
                <button className=" flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white">READ MORE <div className="w-2 h-2 bg-zinc-100 rounded-full"></div></button>

            </div>
            <div className="w-1/2 h-[70vh]">
                <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" className="rounded-3xl w-full h-full" />
            </div>
        </div>
    </div>
  )
}

export default About