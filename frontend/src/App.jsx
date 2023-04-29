import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
<<<<<<< HEAD
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
=======
import Dashboard from './pages/Dashboard';
import NewJob from './pages/NewJob';
function App() {
  return (
    <BrowserRouter>
      <div className='h-screen w-screen flex items-center'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/jobs/new' element={<NewJob />} />
        </Routes>
      </div>
>>>>>>> 1bc465a9c297ff3959653d8d571c890d2d294efb
    </BrowserRouter>
  );
}
export default App;
