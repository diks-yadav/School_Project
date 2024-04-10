import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import "./assets/css/style.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
  //  <>
  //  <Dashboard/>
  //  </>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="dashboard" element={<Dashboard/>}>
    
    </Route>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
