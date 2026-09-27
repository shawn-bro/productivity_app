import { createContext, useState } from "react";

export let Mystore = createContext();

export let Contextprovider = ({children})=>{
    let [loco,setloco] = useState(null);
     let [search,setsearch] = useState(null);
     let [task,settask] = useState([]);
     let [upd,setupd] = useState(null);
return <Mystore.Provider  value={{loco,setloco,search,setsearch,task,settask,upd,setupd}}>{children}</Mystore.Provider>
}