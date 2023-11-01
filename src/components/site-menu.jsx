import { LAST_VISITS, LEADERS } from "../data/leader-board";

export default function SideMenu() {
  return (
    <div className="p-3 bg-base-200 pl-5">
      <Leaders />
      <LatestVitis />
    </div>
  );
}

function LatestVitis() {
  return (
    <div>
      <h1 className="font-bold text-xl mt-12 mb-3">Latest Visit</h1>
      <table className="table">
        <tbody>
          {LAST_VISITS.map((v, i) => (
            <tr key={i}>
              <td>
                <img src={v.avatar} className="h-8 inline mr-3" />
                <strong>{v.name}</strong>
              </td>
              <td>{v.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Leaders() {
  return (
    <div>
      <a href="./leaderboard">
        <h1 className="font-bold text-xl mt-4 mb-2">Leaderboard</h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>points</th>
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
      </a>
    </div>
  );
}
