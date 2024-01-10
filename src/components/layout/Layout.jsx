import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <aside>menubar</aside>
      <header>header</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
