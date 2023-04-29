import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
import JobsListing from './pages/JobsListing';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/jobsListing' element={<JobsListing />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
