import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
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
    </BrowserRouter>
  );
}
export default App;
