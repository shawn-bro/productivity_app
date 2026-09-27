import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Quotes() {

let [ind,setind] = useState(1);

const quotes = [
  {
    index: 1,
    quote: "Nothing great was ever achieved without enthusiasm.",
    author: "Ralph Waldo Emerson"
  },
  {
    index: 2,
    quote: "Arise, awake, and stop not till the goal is reached.",
    author: "Swami Vivekananda"
  },
  {
    index: 3,
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    author: "Marcus Aurelius"
  },
  {
    index: 4,
    quote: "The morning will surely come, the darkness will vanish.",
    author: "Rabindranath Tagore"
  },
  {
    index: 5,
    quote: "You may encounter many defeats, but you must not be defeated.",
    author: "Maya Angelou"
  }
];



  return (
  <div className="min-h-screen bg-[#f5f1e8] px-4 py-10 text-gray-900">

    <div className="mx-auto max-w-5xl">

      {/* Heading */}
      <div className="mb-10 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
          Daily Inspiration
        </p>

        <h1 className="mt-2 font-serif text-4xl font-bold sm:text-5xl">
          Motivational Quotes
        </h1>
      </div>

      {/* Quote Container */}
      <div className="relative flex min-h-[420px] items-center justify-center rounded-3xl border border-gray-300 bg-white px-6 py-16 shadow-lg sm:px-16">

        {/* Previous Button */}
        <button 
        onClick={()=>{
          setind(ind-1);
        }}
        disabled = {ind === 0}
        className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-xl transition hover:bg-gray-100 sm:left-8">
          ←
        </button>

        {/* Quote */}
        <div className="max-w-3xl text-center">

          <div className="mb-6 text-5xl font-serif text-gray-300">
            “
          </div>

          <p className="font-serif text-3xl font-semibold leading-relaxed sm:text-4xl">
            {quotes[ind].quote}
          </p>

          <div className="mx-auto mt-8 h-px w-16 bg-gray-300" />

          <p className="mt-5 font-serif text-lg italic text-gray-600">
            — {quotes[ind].author}
          </p>

        </div>

        {/* Next Button */}
        <button 
        onClick={() => {
    setind(ind + 1);
  }}
  disabled={ind === quotes.length - 1}
        className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-xl transition hover:bg-gray-100 sm:right-8">
          →
        </button>

      </div>

      {/* Bottom Navigation */}
      <div className="mt-8 flex items-center justify-center gap-4">

        <button 
        onClick={()=>{
          setind(ind-1);
        }}
        disabled = {ind === 0}
        className="rounded-xl border border-gray-300 bg-white px-6 py-3 font-medium transition hover:bg-gray-100">
          ← Previous
        </button>

        <button
        onClick={()=>{
          setind(ind+1);
        }}
        disabled = {ind === quotes.length-1}
        className="rounded-xl bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800">
          Next →
        </button>

      </div>

    </div>
  </div>
);
}

export default Quotes
