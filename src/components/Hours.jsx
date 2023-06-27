import "./Hours.css";

const Hours = ({ hours, setHours, title, maxHours }) => {
  const handleButtonClick = (increase) => {
    if (increase) {
      setHours(hours + 1);
    } else {
      if (hours > 0) {
        setHours(hours - 1);
      }
    }
  };

  return (
    <div className="hours-container">
      <button className="hours-minus" onClick={() => handleButtonClick(false)}>
        -
      </button>
      <p className="hours-number">{hours}</p>
      <p className="hours-title">{title}</p>
      <button className="hours-plus" onClick={() => handleButtonClick(true)}>
        +
      </button>
    </div>
  );
};

export default Hours;
