import "./App.css";
import Header from "./components/Header";
import Dropdown from "./components/Dropdown";
import Hours from "./components/Hours";
import WorkDays from "./components/WorkDays";
import DaysOfTheWeek from "./components/DaysOfTheWeek";
import MainDays from "./components/MainDays";
import { useState } from "react";
import WorkHours from "./components/WorkHours";
import typeOfHours from "./store/typeOfHours";
import typeOfBreak from "./store/typeOfBreak";

function App() {
  const [selectedTypeOfHours, setSelectedTypeOfHours] = useState(
    typeOfHours[0]
  );
  const [hours, setHours] = useState(3);
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDays, setSelectedDays] = useState(["ПН, СР, ПТ"]);
  const [breakTime, setBreakTime] = useState(typeOfBreak[0]);
  const [hoursPerDay, setHoursPerDay] = useState(1);

  const obj = {
    hourType: selectedTypeOfHours,
    hours: hours,
    beginDate: beginDate,
    endDate: endDate,
    selectedDays: selectedDays,
    breakTime: breakTime,
    hoursPerDay: hoursPerDay,
  };

  return (
    <div className="App">
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
          alignItems: "center",
        }}
      >
        <Dropdown
          list={typeOfHours}
          selectedItem={selectedTypeOfHours}
          setSelectedItem={setSelectedTypeOfHours}
        />
        <Hours
          hours={hours}
          setHours={setHours}
          title="Всего часов"
          maxHours={100}
        />
        <WorkDays
          selectedDays={selectedDays}
          hours={hours}
          setBeginDate={setBeginDate}
          setEndDate={setEndDate}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
        }}
      >
        <MainDays
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
        <DaysOfTheWeek
          selectedDays={selectedDays}
          setSelectedDays={setSelectedDays}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "25px",
          alignItems: "center",
        }}
      >
        <Dropdown
          list={typeOfBreak}
          selectedItem={breakTime}
          setSelectedItem={setBreakTime}
        />
        <Hours
          hours={hoursPerDay}
          setHours={setHoursPerDay}
          title="Часов в день"
          maxHours={hours}
        />
        <WorkHours
          typeOfHours={selectedTypeOfHours}
          breakTime={breakTime}
          hoursPerDay={hoursPerDay}
        />
      </div>
      <button onClick={() => console.log(obj)}>Добавить расписание</button>
    </div>
  );
}

export default App;
