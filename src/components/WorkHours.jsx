import "./WorkHours.css";
import React, { useEffect, useState } from "react";

const WorkHours = ({ typeOfHours, breakTime, hoursPerDay }) => {
  const [time, setTime] = useState("07:00");

  const addHours = (hours) => {
    const currentTime = new Date();
    currentTime.setHours(7, 0, 0);

    let workHours = hours;

    if (typeOfHours.id === "astronomy") {
      workHours = workHours + 0;
      currentTime.setHours(currentTime.getHours() + workHours);
    } else {
      workHours = workHours - 1;
      const minutesToAdd = Math.floor(workHours * 45) + 45 + breakTime.value;
      currentTime.setMinutes(currentTime.getMinutes() + minutesToAdd);
    }

    const formattedTime = currentTime
        .toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
        });

    setTime(formattedTime);
  };

  useEffect(() => {
    addHours(hoursPerDay);
  }, [hoursPerDay, typeOfHours, breakTime]);

  return (
      <div className="hours-container">
        <p className="hours-time">07:00</p>
        <p className="hours-text">до</p>
        <p className="hours-time">{time}</p>
      </div>
  );
};

export default WorkHours;
