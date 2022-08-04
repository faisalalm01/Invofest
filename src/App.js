import './index.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Workshop from './pages/workshop/workshop';



function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
          <Route path='/test' element={<LandingPage />} />
          <Route path='/Workshop' element={<Workshop/>} />
          
      </Routes>
     </Router>
    </>
  );
}

export default App;