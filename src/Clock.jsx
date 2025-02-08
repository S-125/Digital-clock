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
const formatDate=(t)=>{
    return t.toLocaleDateString("en-US",{
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    )
};
  
  return (
<div className="flex justify-center items-center">
    <div className='bg-[#fefefe] w-[50vw] h-auto text-[30px] sm:text-[40px]  border-2 border-black rounded-[30px] flex flex-col justify-center items-center'>
      <p className='mt-5'>{formatTime(time)}</p>
      <p className='text-[10px] sm:text-[20px] p-3'>{formatDate(time)}</p>
      <button className='text-[15px] mt-[2px] m-4 bg-gray-300 p-3 rounded-[30px] border-2 cursor-pointer sm:text-[20px]'
      onClick={Changeformat(is12hr,text)}>
        {text}</button>
    </div>
    </div>
  )
}

export default Clock
