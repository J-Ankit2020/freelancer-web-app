import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
      <div className='h-screen w-screen flex items-center'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
