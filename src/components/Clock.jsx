import React, { useEffect, useState } from "react";

const Clock = (props) => {
  const [newDate, setTime] = useState(new Date());
  const year = newDate.getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h1>
        {newDate.getDate()}.
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
