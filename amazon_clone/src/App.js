import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/authentication/signup';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
