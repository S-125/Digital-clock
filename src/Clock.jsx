import React from 'react'
import { useState, useEffect } from 'react'
function Clock() {
    const [time,setTime]=useState(new Date());
    const [is12hr,setIs12hr]=useState(true);
    const [text,setText]=useState("Set to 24 hour format");
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());},1000);
            return () => {
                clearInterval(interval);
              };
    },[]);
  const formatTime=(t)=>{
    return t.toLocaleTimeString("en-US",{
        hour:'2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12:is12hr,
    }
    
    )
};
const Changeformat=(is12hr,text)=>{
    return ()=>{
    setIs12hr(!is12hr);
    if(text==='Set to 24 hour format'){
        setText('Set to 12 hour format');
    }
    else{
        setText('Set to 24 hour format');
    }
}
};
  
  return (
<div className="flex justify-center items-center">
    <div className='bg-[#fefefe] w-[50vw] h-[40vh] text-[30px] sm:text-[40px]  border-2 border-black rounded-[30px] flex flex-col justify-center items-center'>
      {formatTime(time)}
      <button className='text-[15px] mt-[2rem] bg-gray-300 p-3 rounded-[30px] border-2 cursor-pointer sm:text-[20px]'
      onClick={Changeformat(is12hr,text)}>
        {text}</button>
    </div>
    </div>
  )
}

export default Clock
