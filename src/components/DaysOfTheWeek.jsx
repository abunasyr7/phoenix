import "./DaysOfTheWeek.css";

const daysOfTheWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

const DaysOfTheWeek = ({ selectedDays, setSelectedDays }) => {
  const handleButtonClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };
  return (
    <div className="days-container">
      {daysOfTheWeek.map((day) => (
        <button
          key={day}
          className={selectedDays.includes(day) ? "active" : ""}
          onClick={() => handleButtonClick(day)}
        >
          {day}
        </button>
      ))}
    </div>
  );
};

export default DaysOfTheWeek;
