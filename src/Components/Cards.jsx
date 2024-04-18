

function Cards() {

    return (
      <div className="cards w-full h-screen bg-zinc-900 flex flex-col  md:flex-row  md:items-center px-2 md:px-32 md:gap-5">
          <div className="cardconatiner w-full h-[30vh]  md:h-[50vh] md:w-1/2">
              <div className="relative card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center ">
                  <img className="" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                  <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-10 bottom-10">&copy; 2019-2022</button>
              </div>
  
          </div>
          <div className="flex flex-col md:flex-row mt-10 gap-5 cardconatiner md:h-[50vh] md:w-1/2">
          <div className="card relative w-full  h-[30vh] rounded-xl md:w-1/2 md:h-full bg-[#103e38] flex justify-center items-center ">
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" width={"150vw"} height={"150vh"} alt="" />
              <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-5 bottom-5 text-md">RATING 5.0 ON CLUTCH</button>
          </div>
          <div className="card relative h-[30vh] rounded-xl md:w-1/2 md:h-full bg-[#092f2a] flex justify-center items-center">
              <img src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" width={"100vw"} height={"100vh"} alt="" />
              <button className="absolute border-2 border-[#CDEA67] text-[#CDEA67] rounded-3xl px-5 py-1 left-5 bottom-5 text-md">BUSINESS BOOTCAMP ALUMNI</button>
          </div>
             
  
          </div>
      </div>
    )
  }
  
  export default Cards