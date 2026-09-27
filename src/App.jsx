import React from 'react'

import SearchBar from "./components/SearchBar";
import CurrentWeather from './components/CurrentWeather';
import Weatherapi from './services/Weatherapi';
import Timmer from './components/timmer';
import Quotes from './components/Quotes';
import Task from './form/Task';
import Todo from './form/Todo';

function App() {
  return (
    <div className="min-h-screen bg-[#0b3d73] bg-[url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=2000')] bg-cover bg-center bg-fixed">

      {/* Overlay */}
      <div className="min-h-screen bg-blue-950/45 px-4 py-8">

        {/* Header */}
        <div className="mx-auto max-w-7xl text-center">

          <h1 className="text-5xl font-bold tracking-tight text-white">
            Weather<span className="text-blue-400">Pro</span>
          </h1>

          <p className="mt-2 text-sm text-white/90 md:text-base">
            Experience weather like never before with real-time data, beautiful
            visuals,
            <br className="hidden md:block" />
            and precise forecasts for any location worldwide.
          </p>
<div>
  <SearchBar />
</div>
          
<div className='m-3'>
  <CurrentWeather />
</div>

<div>
  <Weatherapi />
</div>


        </div>

      </div>

    </div>
  );
}

export default App;
