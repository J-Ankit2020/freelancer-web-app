import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default App;
