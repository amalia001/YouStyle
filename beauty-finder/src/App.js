import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SchedulingContainer from './Pages/Home.js';
import Register from './Pages/Register.js';
import MyAccount from './Pages/MyAccount.js';
import Catalog from './Pages/Catalog.js';
import Contact from './Pages/Contact.js';
import './App.css';
import  Navbar from './Components/Navbar.jsx';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        <Navbar isLogged={loggedIn} onHandleLogin={() => setLoggedIn(!loggedIn)} />
        <Routes>
          <Route path="/home"  element={<SchedulingContainer/>} /> 
          <Route path="/register"  element={<Register/>} />
          <Route path="/my-account"  element={<MyAccount/>} />
          <Route path="/catalog"  element={<Catalog/>} />
          <Route path="/contact"  element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;