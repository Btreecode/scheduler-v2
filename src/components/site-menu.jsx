import { PEOPLE, TIMES } from "../data/leader-board";

export default function SideMenu({ user, setUser }) {
  return (
    <div>
      <div className="bg-base-200 w-side">
        <Available user={user} setUser={setUser} />
      </div>
      <br />
      <div className="bg-base-200 w-side">
        <Overlaps />
      </div>
    </div>
  );
}

function Available({ user, setUser }) {
  return (
    <div>
      <h1 className="font-bold text-xl mt-5 mb-2">Priorities</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {PEOPLE.map((people, i) => (
            <tr className="button" role="button" key={i} onClick={()=>{user == people.name ? setUser(undefined) : setUser(people.name)}}>
              <td>{i + 1}</td>
              <td><div className={people.name === user ? "font-bold" : ""}>{people.name}</div></td>
              <td>{people.hours} hrs</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Overlaps() {
  return (
    <div>
      <h1 className="font-bold text-xl mt-5 mb-2">Suggestions</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Rank [ppl]</th>
            <th>Available hours</th>
          </tr>
        </thead>
        <tbody>
          {TIMES.map((slot, i) => (
            <tr key={i}>
              <td>{i + 1} [{slot.people} ppl]</td>
              <td>{slot.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}