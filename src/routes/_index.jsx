import { Router, useNavigate } from "react-router-dom";

export default function Index() {
  const nav = useNavigate();
  function onChange1() {
    nav("/puzzles");
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="schedule">
        <table>
          <tr className="tableRow">
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
