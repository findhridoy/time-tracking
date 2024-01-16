import { Outlet } from "react-router-dom";
import Header from "../Header";
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <div>
      <Sidebar />
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
