import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SchedulingContainer from './Pages/Home.js';
// import Register from './Pages/Register.js';
import ClientAccount from './Pages/ClientAccount.js';
import Catalog from './Pages/Catalog.js';
import './App.css';
import  Navbar from './Components/Navbar.jsx';
import './GlobalStyles.css'
import CreateBusinessAccount from './Pages/CreateBusinessAccount.js';
import RegisterSalon from './Pages/RegisterSalon.js';
import Salons from './Pages/Salons.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'http://localhost:5000/api/clients';

    // Make a GET request using fetch
    fetch(apiUrl)
      .then(response => response.json())
      .then(result => {
        // Update the state with the fetched data
        console.log(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar isLogged={loggedIn} onHandleLogin={() => setLoggedIn(!loggedIn)} />
        <Routes>
          <Route path="/home"  element={<SchedulingContainer/>} /> 
          {/* <Route path="/register"  element={<Register/>} /> */}
          <Route path="/my-account"  element={<ClientAccount/>} />
          <Route path="/catalog"  element={<Catalog/>} />
          <Route path="/create-business-account"  element={<CreateBusinessAccount/>} />
          <Route path="/register-salon" element={<RegisterSalon/>} />
          <Route path="/salons" element={<Salons/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;