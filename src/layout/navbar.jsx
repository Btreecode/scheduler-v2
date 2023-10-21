import { Link } from "react-router-dom";
import { ROUTES } from "../data/routes";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center bg-base-200 mb-5">
      <div className="navbar max-w-6xl">
        <div className="navbar-start">
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
            NHS Math Olympiad
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-0.5 mx-0.5">
            {ROUTES.filter(r => r.title).map((r) => (
              <li key={r.title}>
                <Link to={r.path}>{r.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <div className="dropdown dropdown-end flex">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar flex-1">
              <img
                alt="logo"
                src="https://wallpapers.com/images/hd/cool-star-wallpaper-image-hd-wallpaper-android-abpx-4wbzak7jlvpn1bxx.jpg"
                className="w-11 rounded-full inline"
              />
            </label>
            <div className="flex-1">name</div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
