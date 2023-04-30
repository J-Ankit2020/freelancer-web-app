import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewJob from "./pages/NewJob";
import JobsListing from "./pages/JobsListing";
function App() {
  return (
    <BrowserRouter>
      <div className="h-full w-screen bg-[#B2BCFE] flex items-center">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs/new" element={<NewJob />} />
          <Route path="/jobsListing" element={<JobsListing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
