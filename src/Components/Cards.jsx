

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
        <div className="cardconatiner h-[50vh] w-1/2">
            <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center ">
                <img className="" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-10 bottom-10">&copy; 2019-2022</button>
            </div>

        </div>
        <div className="flex gap-5 cardconatiner h-[50vh] w-1/2">
        <div className=" card relative rounded-xl w-1/2 h-full bg-[#103e38] flex justify-center items-center ">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" width={"150vw"} height={"150vh"} alt="" />
            <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-5 bottom-5 text-sm">RATING 5.0 ON CLUTCH</button>
        </div>
        <div className=" card relative rounded-xl w-1/2 h-full bg-[#092f2a] flex justify-center items-center">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width={"100vw"} height={"100vh"} alt="" />
            <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-5 bottom-5 text-sm">BUSINESS BOOTCAMP ALUMNI</button>
        </div>
           

        </div>
    </div>
  )
}

export default Cards