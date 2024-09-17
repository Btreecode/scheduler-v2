import { LEADERS } from "../data/leader-board";

export default function SideMenu() {
  return (
    <div className="p-3 bg-base-200 pl-5 w-side">
      <Leaders />
    </div>
  );
}

function Leaders() {
  return (
    <div>
      <h1 className="font-bold text-xl mt-4 mb-2">Leaderboard</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th># of hrs available</th>
          </tr>
        </thead>
        <tbody>
          {LEADERS.map((leader, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{leader.name}</td>
              <td>{leader.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
