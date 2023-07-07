import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./clock.css";

function Clock(){
    const[currentTime,setCurrentTime] = useState(new Date());

    useEffect(() => {
        const time = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    
        return () => {
          clearInterval(time);
        };
      }, []);
    
      return (

        <div>
        <h1 className="head"> Current Time</h1>
        <p className="time">{currentTime.toLocaleTimeString()}</p>

    </div>
      );
       
       
}
export default Clock;