 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import FlightSearch from './Pages/FlightSearch';
import FlightBooking from './Pages/FlightBooking';
import Payment from './Pages/Payment';

// Component
 

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<FlightSearch />} />
          <Route path="/book" element={<FlightBooking />} />
          <Route path="/card" element={<Payment />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
