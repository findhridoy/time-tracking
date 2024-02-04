import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Calender from "./pages/Calender";
import Dashboard from "./pages/Dashboard";
import TimeTracker from "./pages/TimeTracker";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="time-tracker" element={<TimeTracker />} />
        <Route path="calender" element={<Calender />} />
      </Route>
    </Routes>
  );
}

export default App;
