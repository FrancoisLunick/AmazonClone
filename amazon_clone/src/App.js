import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/authentication/signup';
import logo from './logo.svg';
import './App.css';
import Login from './components/authentication/Login';
import Productdetailspage from './components/Productdetailspage';
import Homepage from './Homepage';
import Cart from './components/Cart';

//Routing for web pages using a component called browser router
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/homepage' element={<Homepage/>}/>
        <Route path='/productdetailspage' element={<Productdetailspage/>}/>
        <Route path='/cart' element={<Cart/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
