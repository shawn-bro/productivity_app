import React, { useContext } from 'react'
import { Mystore } from '../context/Mystore';



import {
  MapPin,
  Droplets,
  Wind,
  Gauge,
  Thermometer,
  Snowflake,
  CloudRainWind
} from "lucide-react";



function CurrentWeather() {
    let {loco,setloco} = useContext(Mystore);
console.log(loco);


console.log(loco?.current?.humidity);

  return (
        

    <div className="rounded-3xl border border-white/10 bg-[#111827] p-6 shadow-2xl">

      {/* Location */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-blue-500/10 p-3">
            <MapPin
              size={22}
              className="text-blue-400"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white">
              {loco?.location?.name}
            </h2>

            <p className="text-sm text-gray-500">
              {loco?.location?.region}, {loco?.location?.country}
            </p>
          </div>

        </div>

        <div className="text-right">
          <p className="text-sm text-gray-400">
            Today
          </p>

          <p className="text-xs text-gray-600">
            {loco?.location?.localtime}
          </p>
        </div>

      </div>


      {/* Temperature */}
      <div className="mt-8 flex items-center justify-between">

        <div>

          <div className="flex items-start">

            <span className="text-7xl font-semibold text-white">
              {loco?.current?.feelslike_c}
            </span>

            <span className="mt-2 text-3xl text-gray-400">
              °C
            </span>

          </div>

          <h3 className="mt-2 text-lg font-medium text-white">
            {loco?.current?.condition?.text}
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            H: {loco?.location?.lat}° &nbsp; L: {loco?.location?.lon}°
          </p>

        </div>

        <div className="rounded-full bg-yellow-400/10 p-6">
          <img
  src={"https:" + loco?.current?.condition?.icon}
  alt="weather"
/>
        </div>

      </div>


      {/* Weather Details */}
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">

        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">
          <Droplets className="text-blue-400" size={22} />

          <p className="mt-3 text-xs text-gray-500">
            Humidity
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {loco?.current?.humidity}%
          </p>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">
          <Wind className="text-blue-400" size={22} />

          <p className="mt-3 text-xs text-gray-500">
            Wind Speed
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {loco?.current?.wind_kph} k/h
          </p>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">
          <Gauge className="text-blue-400" size={22} />

          <p className="mt-3 text-xs text-gray-500">
            Pressure
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {loco?.current?.pressure_in} hPa
          </p>
        </div>


        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">
          <Thermometer className="text-blue-400" size={22} />

          <p className="mt-3 text-xs text-gray-500">
            Feels Like
          </p>

          <p className="mt-1 text-sm font-medium text-white">
            {loco?.current?.feelslike_c}°C
          </p>
        </div>

      </div>


      {/* Sunrise & Sunset */}
      <div className="mt-4 grid grid-cols-2 gap-3">

        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">

          <div className="flex items-center gap-3">

            <CloudRainWind
              size={25}
              className="text-orange-400"
            />

            <div>
              <p className="text-xs text-gray-500">
                chances of rain
              </p>

              <p className="mt-1 font-medium text-white">
                 {loco?.current?.chance_of_rain} %
              </p>
            </div>

          </div>

        </div>


        <div className="rounded-2xl border border-white/5 bg-[#0b0f17] p-4">

          <div className="flex items-center gap-3">

            <Snowflake
              size={25}
              className="text-purple-400"
            />

            <div>
              <p className="text-xs text-gray-500">
                chances of snow
              </p>

              <p className="mt-1 font-medium text-white">
                {loco?.current?.chance_of_snow} %
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>


  );
}

export default CurrentWeather;