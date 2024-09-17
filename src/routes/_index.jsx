import { DATES } from "../data/dates";

export default function Index() {
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
            {DATES.map((v, i) => (<TableRow date={v} />))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function TableRow({date}) {
  return(
    <tr>
      <td>{date}</td>
    </tr>
  );
}