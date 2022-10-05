import React, { useState } from 'react';

const Traffic = () => {
    const [isActive, setIsActive] = useState("");
    

    let colors = ["red", "yellow", "green"]

//WOrking
 let newSetInterval;

   const weee = () => {
     let colors = ["red", "yellow", "green"]
      for (let i = 0; i < colors.length; i++) {
        newSetInterval = setInterval(() => {
        setIsActive(colors[i])
        i++
        console.log('het');
        if (i >= colors.length) i=0;
        }, 1000); 
      }
      
    }

    const cleaner = () => {
      console.log('The cleaner');
      setTimeout(newSetInterval)
    }

// Render
// Render
    return (
      <div className=''>
        <div className='topLine'></div>
        <div className='trafficBox'>
            <div className='pt-3'>
            <button
                key={1}
                type="button"
                onClick={() => setIsActive("red")} 
                className={"red"  + (isActive === "red" ? " bgGlow" : "")}
              >
              </button>
            </div>
            <div className='pt-1'>
            <button
            key={2}
                type="button"
                onClick={() => setIsActive("yellow")} 
                className={"yellow"  + (isActive === "yellow" ? " bgGlow" : "")}
              >
              </button>
            </div>
            <div className='pt-1'>
            <button
                key={3}
                type="button"
                onClick={() => setIsActive("green")} 
                className={"green"  + (isActive === "green" ? " bgGlow" : "")}
              >
              </button>
            </div>
        </div>
        <div className='test'>
        <button
                key={4}
                type="button"
                onClick={weee} 
                className={() => {}}
              >
                Start
          </button>
        {/* <button
                key={5}
                type="button"
                onClick={() => {}} 
                className={() => {}}
              >
                Stop
          </button> */}
        </div>
      </div>
    )
}
export default Traffic;