import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route to="/" component={Home} />
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
