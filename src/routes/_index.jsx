import { useState } from "react";
import { Router, useNavigate } from "react-router-dom";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const TIMES = new Array(24).fill(0).map((_, i) => i < 12 ? `${HOURS[i % 12]}:00 AM` : `${HOURS[i % 12]}:00 PM`);

const CALENDARS = [
  new Array(7).fill(0).map((_, i) => new Array(24).fill(Math.random() > 0.5 ? true : false)),
  new Array(7).fill(0).map((_, i) => new Array(24).fill(Math.random() > 0.5 ? true : false)),
  new Array(7).fill(0).map((_, i) => new Array(24).fill(Math.random() > 0.5 ? true : false)),
  new Array(7).fill(0).map((_, i) => new Array(24).fill(Math.random() > 0.5 ? true : false))
]

export default function Index() {
  let [calendar, setCalendar] = useState(new Array(7).fill(0).map((_, i) => new Array(24).fill(false)));
  let [myCalendar, setMyCalendar] = useState(undefined);
  const nav = useNavigate();
  function toTimetable() {
    setMyCalendar(calendar);
  }
  function toHeatmap() {
    nav("/heatmap");
  }
  let [d, setD] = useState(new Date());
  return (
    <div className="flex flex-col flex-grow min-h-screen" style={{height: "1px"}}>
      {myCalendar ? 
        <Schedules myCalendar={myCalendar} /> : 
        <Schedule setMyCalendar={setMyCalendar} calendar={calendar} setCalendar={setCalendar}/>
      }
      <button onClick={() => toHeatmap()}>Confirm</button>
    </div>
  );
}

function Schedules({myCalendar}) {
  return (
    <div>{CALENDARS.map}</div>
  );
}

function Schedule({ calendar, setCalendar}) {
  function toggleCell(day, time) {
    let temp = [...calendar];
    temp[day][time] = !temp[day][time];
    setCalendar(temp);
  }
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex flex-col pr-1">
        <div className="h-6"/>
        {TIMES.map((time) => <div className="flex items-center justify-end text-xs h-6 select-none">{time}</div>)}
      </div>
      {calendar.map((times, i) => (<Column key={i} times={times} day={i} toggleCell={toggleCell} />))}
    </div>
  );
}

function Column({ times, day, toggleCell}) {
  return (
    <div>
      <div className="text-center select-none">{DAYS[day]}</div>
      {times.map((available, i) => (<Cell key={day + "-" + i} toggleCell={toggleCell} available={available} day={day} index={i} />))}
    </div>
  );
}

function Cell({ available, toggleCell, day, index}) {
  return <div onClick={() => toggleCell(day, index)} className={`h-6 w-12 border ${available ? "bg-success" : ""}`} />;
}
