import { useEffect, useState } from "react";

function Eye() {
    const [rotate,setrotate]=useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;


      let deltax=mousex-window.innerWidth/2;
      let deltay=mousey-window.innerHeight/2;


      var angle=Math.atan2(deltay,deltax)*(180/Math.PI);
      setrotate(angle-180);

    });
  });
  return (
    <div className="w-full h-screen bg-[#F6F6F6] overflow-hidden">
      <div data-scroll data-scroll-section  data-scroll-speed="-.7" className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <div style={{
                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
              }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
            <div style={{
                transform:`translate(-50%,-50%) rotate(${rotate}deg)`
              }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                <div className="w-5 h-5 sm:w-10 sm:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eye;
