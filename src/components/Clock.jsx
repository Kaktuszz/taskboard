import React, { useEffect, useState } from "react";

const Clock = (props) => {
  // state for time
  const [newDate, setTime] = useState(new Date());
  // state for year
  const year = newDate.getFullYear();

  // clock refresh with interval in 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    {/* date and time with validation (if some date < 10 set 0 in front of int)  */}
      <h1>
        {newDate.getDate() < 10
          ? `0${newDate.getDate()}`
          : `${newDate.getDate()}`}
        .
        {newDate.getMonth() < 10
          ? `0${newDate.getMonth() + 1}`
          : `${newDate.getMonth() + 1}`}
        .{year}
      </h1>
      <h1>
        {newDate.getHours() < 10
          ? `0${newDate.getHours()}`
          : `${newDate.getHours()}`}
        :
        {newDate.getUTCMinutes() < 10
          ? `0${newDate.getUTCMinutes()}`
          : `${newDate.getUTCMinutes()}`}
      </h1>{" "}
    </>
  );
};

export default Clock;
