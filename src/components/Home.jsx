import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Home() {
let [time,settime] = useState(null);
    let getdata = async()=>{
        try {
            let res = await axios.get("https://time.now/developer/api/timezone/Asia/Kolkata");
        console.log(res.data.datetime.split("T")[1].split(".")[0]);
        settime(res.data.datetime.split("T")[1].split(".")[0]);
        } catch (error) {
            console.log("error of home = ",error);
            
        }
        
    }
   useEffect(()=>{
     getdata()
   },[])
  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-hidden relative flex items-center">

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]" />

      <div className="absolute -bottom-40 right-[-150px] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />

      {/* Main */}
      <div className="relative z-10 w-full px-8 md:px-20">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT */}
          <div>

            <p className="font-mono text-sm text-emerald-400 tracking-[0.35em] mb-7">
              &lt;WELCOME /&gt;
            </p>

            <h1 className="text-6xl md:text-8xl font-black tracking-[-0.06em] leading-[0.9]">

              WELCOME

              <br />

              <span className="text-gray-600">
                TO
              </span>

              <br />

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-400 to-cyan-400">
                SHAWN
              </span>

              <br />

              CODING WORLD
              <span className="text-emerald-400">.</span>

            </h1>

            <p className="mt-8 max-w-xl text-gray-500 text-lg leading-8">
              Where curiosity becomes code,
              <br />
              and ideas turn into reality.
            </p>

            <div className="mt-10 font-mono text-xs text-gray-700">
              <span className="text-emerald-500">shawn@coding-world</span>
              <span> : </span>
              <span className="text-cyan-500">~</span>
              <span> $ </span>
              <span>ready_to_code</span>
              <span className="animate-pulse">_</span>
            </div>

          </div>


          {/* RIGHT — TIME */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Giant Background Time */}
            <div className="absolute text-[180px] md:text-[260px] font-black text-white/[0.025] tracking-[-0.1em] select-none">
              20:03
            </div>

            {/* Clock Circle */}
            <div className="relative w-[330px] h-[330px] md:w-[450px] md:h-[450px] rounded-full border border-white/10 flex items-center justify-center">

              {/* Rings */}
              <div className="absolute inset-6 rounded-full border border-emerald-400/10" />

              <div className="absolute inset-16 rounded-full border border-white/5" />

              <div className="absolute inset-24 rounded-full border border-emerald-400/10" />

              {/* Rotating Ring */}
              <div className="absolute inset-1 rounded-full border border-transparent border-t-emerald-400 animate-spin [animation-duration:7s]" />

              {/* Time */}
              <div className="text-center">

                <p className="font-mono text-xs tracking-[0.5em] text-gray-600 mb-6">
                  CURRENT TIME
                </p>

                <div className="font-mono text-6xl md:text-7xl font-bold">
                  {time}
                </div>

                <p className="mt-5 font-mono text-xs tracking-[0.35em] text-emerald-400">
                  INDIA • IST
                </p>

              </div>

              {/* Small Dots */}
              <div className="absolute top-7 left-1/2 w-2.5 h-2.5 bg-emerald-400 rounded-full shadow-[0_0_20px_#34d399]" />

              <div className="absolute bottom-16 right-10 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_#22d3ee]" />

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-7 left-8 md:left-20 font-mono text-[10px] text-gray-700 tracking-[0.3em]">
        KEEP CODING • KEEP BUILDING • KEEP LEARNING
      </div>

    </div>
  );
}

export default Home;

