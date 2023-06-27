import React from "react";
import "./WorkDays.css";
import getDateOfWeek from "../hooks/getDateOfWeek";

const WorkDays = ({ selectedDays, hours, setBeginDate, setEndDate }) => {
  const currentDate = new Date();

  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear().toString();

  const formattedDate = `${day}.${month}.${year}`;
  setBeginDate(formattedDate)

  const theNumberOfWeek = Math.ceil(hours / selectedDays.length);
  const theDayOfWeek = hours % selectedDays.length;

  // Set the start date as the current date
  const dateOfWeek = getDateOfWeek(theNumberOfWeek, theDayOfWeek, currentDate);
  setEndDate(dateOfWeek)

  return (
    <div className="date-container">
      <p className="date-days">{formattedDate}</p>
      <p className="date-text">до</p>
      <p className="date-days">{dateOfWeek}</p>
    </div>
  );
};

export default WorkDays;
