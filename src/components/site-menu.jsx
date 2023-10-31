import { LAST_VISITS, LEADERS } from "../data/leader-board";

export default function SideMenu() {
  return (
    <div className="p-3 bg-slate-100">
      <Leaders />
      <LatestVitis />
    </div>
  );
}

function LatestVitis() {
  return (
    <div>
      <h1 className="font-bold text-xl mt-10 mb-5">Latest Vitis</h1>
      <table className="table">
        <tbody>
          {LAST_VISITS.map((v, i) => (
            <tr key={i}>
              <td>
                <img src={v.avatar} className="h-8 inline mr-1" />
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
      <h1 className="font-bold text-xl my-5">Leaders</h1>
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
    </div>
  );
}
