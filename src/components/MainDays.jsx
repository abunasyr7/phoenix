import "./MainDays.css";

const MainDays = ({ selectedDays, setSelectedDays }) => {
  const handleButtonClick = (selected) => {
    setSelectedDays(selected);
  };

  const isMainDaysActive = (days) => {
    return (
      days.every((day) => selectedDays.includes(day)) &&
      selectedDays.length <= days.length
    );
  };

  return (
    <div className="main-days">
      <button
        className={isMainDaysActive(["ПН", "СР", "ПТ"]) ? "active" : ""}
        onClick={() => handleButtonClick(["ПН", "СР", "ПТ"])}
      >
        ПН/СР/ПТ
      </button>
      <button
        className={isMainDaysActive(["ВТ", "ЧТ"]) ? "active" : ""}
        onClick={() => handleButtonClick(["ВТ", "ЧТ"])}
      >
        ВТ/ЧТ
      </button>
    </div>
  );
};

export default MainDays;
