// import React,{useState,useEffect} from 'react'

// const ProgressBar = ({value=0}) => {
//       const [percent,setPercent]=useState(value);
      
//       useEffect(()=>{
//         setPercent(Math.min(100,Math.max(value,0)));
//       },[value]);

//   return (
//     <div className="flex justify-center items-center mt-4">
//     <div className='h-[20px] w-[500px] bg-slate-300 border-black rounded-2xl relative overflow-hidden'>
//       <div
//         className='h-full bg-green-500'
//         style={{ width: `${percent}%` }}
//         role='progressbar'
//         aria-valuemin={0}
//         aria-valuemax={100}
//         aria-valuenow={percent.toFixed()}
//       ></div>
//       <div className='absolute inset-0 flex justify-center items-center'>
//         <span style={{color:percent>49?'white':'black'}}>{percent.toFixed()}%</span>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default ProgressBar

import React, { useState, useEffect } from "react";

const ProgressBar = ({ totalCalories1, totalCalories2 }) => {
  const [percent, setPercent] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (totalCalories1 === 0 && totalCalories2 === 0) {
      setPercent(0);
      setMessage("");
    } else {
    //   const calorieDifference = totalCalories1 - totalCalories2;

      let newPercent = 0;
      let newMessage = "";

      if (totalCalories1 > totalCalories2) {
        newPercent = Math.min(100, (totalCalories2 / totalCalories1) * 100);
        newMessage = `You have to do exercise to burn  ${totalCalories1-totalCalories2} calories more. `;
      } else if (totalCalories1 < totalCalories2) {
        newPercent = 100;
        newMessage = `You have burned ${totalCalories2-totalCalories1} extra calories.`;
      } else {
        newPercent = 100;
        newMessage = "No need to do exercise anymore.";
      }

      setPercent(newPercent);
      setMessage(newMessage);
    }
  }, [totalCalories1, totalCalories2]);

  return (
    <div className="flex flex-col justify-center items-center mt-4">
      <div className='h-[20px] w-[500px] bg-slate-300 border-black rounded-2xl relative overflow-hidden'>
        <div
          className='h-full bg-green-500'
          style={{ width: `${percent}%` }}
          role='progressbar'
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent.toFixed()}
        ></div>
        <div className='absolute inset-0 flex justify-center items-center'>
          <span style={{color: percent > 49 ? 'white' : 'black'}}>{percent.toFixed()}%</span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default ProgressBar;
