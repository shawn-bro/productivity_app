import React, { useContext, useState } from 'react'

import { Search, LocateFixed, Navigation } from "lucide-react";
import { useCallback } from 'react';
import { Mystore } from '../context/Mystore';

function SearchBar() {
 let {search,setsearch} = useContext(Mystore);
  console.log(search);
  
  return (
    <div className="mx-auto mt-6 flex max-w-2xl items-center rounded-2xl border border-white/10 bg-[#111827]/80 p-2 shadow-xl backdrop-blur-xl">

      {/* Search Icon */}
      <Search
        size={20}
        className="ml-3 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search city..."
        onChange={(e)=> {setsearch(e.target.value)}}
        className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
      />

      {/* Current Location */}
      <button
        className="mr-2 rounded-xl p-3 text-gray-400 transition hover:bg-white/10 hover:text-white"
      >
        <LocateFixed size={19} />
      </button>

      {/* Search */}
      <button
        className="rounded-xl bg-blue-500 px-4 py-3 text-white transition hover:bg-blue-600"
      >
        <Navigation size={18} />
      </button>

    </div>
  );
}

export default SearchBar;