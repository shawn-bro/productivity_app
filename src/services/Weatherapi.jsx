import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Mystore } from '../context/Mystore';


function Weatherapi() {
let {loco,setloco,search} = useContext(Mystore);
console.log(search);

let getdata = async()=>{
    try {
        let location = await axios.get(`https://api.weatherapi.com/v1/current.json?key=130e9143c1654c66912155439262509&q=${search}&aqi=yes`);
        console.log(location.data);
        setloco(location.data)
    } catch (error) {
        console.log("errors = ",error);
    }
}

useEffect(()=>{
    getdata();
},[search])

console.log("loco = ",loco);

  return (

    <div></div>
  )
}

export default Weatherapi