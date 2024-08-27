import { Link } from "react-router-dom";
import { ROUTES } from "../data/routes";
import { useContext, useState } from "react";
import { AppContext } from "./layout";

export default function Navbar() {
  let { user, setUser } = useContext(AppContext);

  let [signIn, setSignIn] = useState(undefined);

  return (
    <div className="w-full flex justify-center bg-base-200 mb-5 relative">
      <div className="navbar w-navbar">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              {ROUTES.map((r) => (
                <li key={r.title}>
                  <Link to={r.path}>{r.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Min's Scheduler
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0.5">
            {ROUTES.filter((r) => r.title).map((r) => (
              <li key={r.title}>
                <Link to={r.path}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2 mr-48">
          {user ? (
            <div className="dropdown dropdown-end flex">
              <div className="flex items-center space-x-2">
                <div className="font-bold mr-3">{user.name}</div>
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar flex-1"
                >
                  <img
                    alt="logo"
                    src={user.img}
                    className="w-11 rounded-full inline"
                  />
                </label>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={() => setUser(undefined)}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-neutral" onClick={() => setSignIn(true)}>
              Log In
            </button>
          )}
        </div>
      </div>
      {signIn && <SignIn close={() => setSignIn(undefined)} />}
    </div>
  );
}

function SignIn({ close }) {
  let { setUser } = useContext(AppContext);

  function onSubmit(ev) {
    ev.preventDefault();
    setUser({
      img: "https://img.pikbest.com/backgrounds/20191105/cool-planet-texture-background-image_2844004.jpg!sw800",
      name: "Min Lim",
      username: "Min.Lim07",
      email: "smth@gmail.com",
    });
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
        <div className="text-3xl font-bold py-5 text-center">Sign In</div>
        <div className="flex items-center space-x-2">
          <div className="text-xl italic flex-grow">e-mail: </div>
          <input name="email" className="w-72 input input-sm input-primary" />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xl italic flex-grow">password: </div>
          <input
            name="password"
            type="password"
            className="w-72 input input-sm input-primary"
          />
        </div>
        <div className="flex justify-center pt-5">
          <button className="btn btn-primary" onClick={onSubmit}>
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
