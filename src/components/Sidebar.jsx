import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="bg-slate-400 h-screen fixed w-[240px] top-0 left-0">
      <div>logo</div>

      <nav>
        <ul>
          <li>
            <NavLink to="/dashboard">
              <span>Dahsborad</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/time-tracker">
              <span>Time Tracker</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/calender">
              <span>Calender</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* expand button */}
      <button
        type="button"
        className="absolute -right-6 top-[50%] transform translate-y-[-50%] bg-slate-200 w-12 h-12 rounded-full"
      >
        <span className="bg-black w-6 h-1 absolute left- rounded origin-left -rotate-45"></span>
        <span className="bg-black w-6 h-1 absolute rounded rotate-45 origin-left transition-all duration-500"></span>
      </button>
    </aside>
  );
}
