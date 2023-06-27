import getWeekDates from "./getWeekDates";

function getDateOfWeek(n, dayOfWeek, startDate) {
  const weekDates = getWeekDates(n, startDate);
  const date = new Date(weekDates.startOfWeek);
  date.setDate(date.getDate() + dayOfWeek);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
}

export default getDateOfWeek;
