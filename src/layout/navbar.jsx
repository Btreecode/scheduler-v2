import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "./layout";

export default function Navbar() {
  let [joinCode, setJoinCode] = useState(undefined);

  return (
    <div className="w-full flex justify-center bg-base-200 mb-5 relative">
      <div className="navbar w-full h-18 flex justify-between">
        <div className="navbar-start mr-6">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl ml-3">
            Min's Scheduler
          </Link>
        </div>
        <button className= "btn btn-neutral text-sm" style={{marginRight: "212px", width: "120px"}} onClick={() => setJoinCode(true)}>
          Join/Create
        </button>
      </div>
      {joinCode && <joinCode close={() => setJoinCode(undefined)} />}
    </div>
  );
}

function joinCode({ close }) {
  let { setUser } = useContext(AppContext);

  function onSubmit(ev) {
    ev.preventDefault();
    close();
  }

  return (
    <div
      className="w-screen h-screen absolute flex justify-center items-center z-10"
      style={{ backgroundColor: "rgb(0, 0, 0, 0.3)" }}
    >
      <form
        onSubmit={onSubmit}
        className="p-10 bg-base-100 space-y-3 rounded-xl relative"
      >
        <button
          onClick={close}
          className="absolute btn btn-xs btn-error right-2 top-2 text-center"
        >
          X
        </button>
        <div className="text-3xl font-bold py-5 text-center">Enter Join Code</div>
        <div className="flex items-center space-x-2">
          <div className="text-xl italic flex-grow">Join Code: </div>
          <input
            name="password"
            type="password"
            className="w-72 input input-sm input-primary"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button className="btn btn-primary" onClick={onSubmit}>
            Join Meeting
          </button>
        </div>
      </form>
    </div>
  );
}
