import './index.css';
import { Route, Routes, BrowserRouter as Router} from 'react-router-dom'

// import Home from './pages/Home';
import Dashboard from './pages/Dashboard';



function App() {
  return (
    <> 
     <Router>
      <Routes>
        <Route path='/' element = {<Dashboard/>} />
      </Routes>
     </Router>
      
    </>
  );
}

export default App;