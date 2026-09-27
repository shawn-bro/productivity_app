import React, { useEffect, useState } from 'react'

function Timmer() {
    let [time,setime] = useState(25*60);
    let [running,setrunning]=useState(false);
    let [work,setwork] = useState(true);
    let [count,setcount] = useState(0)

   useEffect(() => {
    if (!running) return;

    let timer = setInterval(()=>{
        setime((prev)=>{
            if(prev == 0){
                return 0;
            }
            return prev -1;
        })
    },10);

    return () => clearInterval(timer);
}, [running]);

useEffect(()=>{
    if(count == 4){
        setcount(0)
        setwork(false);
        setime(30*60);
    }
},[count])

useEffect(()=>{
    if(time !== 0) return;

    if(work == true){
        setcount((prev)=> prev + 1)
        setwork(false);
        setime(5*60);
    }
    else{
        setwork(true);
        setime(25*60);
    }
},[time,work]);

let minute = Math.floor(time/60);
let seconds = time % 60;


 return (
  <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] px-4 py-10 text-white">
    
    {/* Background Glow */}
    <div className="pointer-events-none fixed left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[120px]" />

    <div className="relative z-10 mx-auto max-w-3xl">

      {/* Header */}
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-orange-300">
          Stay Focused
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Pomodoro
        </h1>

        <p className="mt-3 text-gray-400">
          Small steps. Big goals. 🍃
        </p>
      </div>

      {/* Main Card */}
      <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">

        {/* Session Status */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-orange-300/20 bg-orange-400/10 px-5 py-2 text-sm text-orange-200">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-orange-400" />

            {work ? "Work Session" : "Break Time"}
          </div>
        </div>

        <p className="mb-8 text-center text-gray-400">
          {work
            ? "Focus on your task and make progress 🚀"
            : "Take a break and recharge ☕"}
        </p>

        {/* Timer Circle */}
        <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-[10px] border-orange-400/20 shadow-[0_0_80px_rgba(251,146,60,0.15)] sm:h-72 sm:w-72">

          <div className="text-center">
            <h2 className="text-6xl font-semibold tracking-tight sm:text-7xl">
              {minute}:{seconds.toString().padStart(2, "0")}
            </h2>

            <p className="mt-3 text-xs uppercase tracking-[0.35em] text-gray-500">
              Minutes
            </p>
          </div>

        </div>

        {/* Controls */}
        <div className="mt-10 flex items-center justify-center gap-5">

          {/* Reset */}
          <button
            onClick={() => {
              setrunning(false);
              setime(25 * 60);
              setcount(0)
              setwork(true);
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:scale-105 hover:bg-white/10"
          >
            ↻
          </button>

          {/* Pause */}
          <button
            onClick={() => setrunning(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition hover:scale-105 hover:bg-white/10"
          >
            ||
          </button>

          {/* Start */}
          <button
            onClick={() => setrunning(false)}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-400 text-2xl text-gray-950 shadow-lg shadow-orange-500/30 transition hover:scale-105 hover:bg-orange-300"
          >
            ▶
          </button>

        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-black/10 p-5">

          <div className="text-center">
            <p className="text-xs text-gray-500">Sessions</p>
            <p className="mt-2 text-xl font-semibold">{count}</p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">Current</p>
            <p className="mt-2 text-xl font-semibold">
              {work ? "Work" : "Break"}
            </p>
          </div>

          <div className="text-center">
            <p className="text-xs text-gray-500">Next Break</p>
            <p className="mt-2 text-xl font-semibold">
              {work ? "5:00" : "25:00"}
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Text */}
      <p className="mt-6 text-center text-sm text-gray-500">
        Focus deeply • Rest intentionally • Repeat
      </p>

    </div>
  </div>
);
}

export default Timmer
