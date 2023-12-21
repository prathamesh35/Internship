import React, { useState, useEffect } from 'react';

const Clock = () => {

  const [currentTime, setCurrentTime] = useState(new Date());


  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateClock, 1000);


    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 style={{color: "aqua"}}> Real-Time Clock</h1>
      <p style={{color: "aqua"}}>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
