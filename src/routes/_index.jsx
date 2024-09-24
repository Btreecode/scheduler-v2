import { Router, useNavigate } from "react-router-dom";
import { DATES } from "../data/dates";

export default function Index() {
  const nav = useNavigate();
  function toTimetable() {
    nav("/timetable");
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="schedule">
        <table>
          <thead>
            <tr className="tableRow">
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>{DATES.map((v, i) => (<TableRow time={v} number={i} />))}</tr>
          </tbody>
        </table>
      </div>
      <button onClick={() => toTimetable()}>pop up table</button>
    </div>
  );
}

function TableRow({time, number}) {
  return(
    <td>
      <button id={number} onClick={() => alert("add the feature for adding time to availability list")}>{time}</button>
    </td>
  );
}