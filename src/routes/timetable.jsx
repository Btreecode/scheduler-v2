import { useState } from "react";
const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const HOURS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const TIMES = new Array(24).fill(0).map((_, i) => i < 12 ? `${HOURS[i % 12]}:00 AM` : `${HOURS[i % 12]}:00 PM`);

export default function Timetable() {
    let [d, setD] = useState(new Date());
    return(
        <div className="flex flex-col flex-grow min-h-screen" style={{height: "1px"}}>
            <Schedule />
        </div>
    );
}

function Schedule() {
    let [calendar, setCalendar] = useState(new Array(7).fill(0).map((_, i) => new Array(24).fill(false)));
    function toggleCell(day, time) {
        let temp = [...calendar];
        temp[day][time] = !(temp[day][time]);
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
    return <div onDragEnter={() => toggleCell(day, index)} className={`h-6 w-12 border ${available ? "bg-success" : ""} $`} />;
}