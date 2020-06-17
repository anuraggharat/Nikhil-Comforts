import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus'
import Services from './Pages/Services';
import Projects from './Pages/Projects';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus"  exact component={Aboutus} />
          <Route path="/projects"  exact component={Projects} />
          <Route path="/services" component={Services} />
        </Switch>
        <Footer />
      </Router>


    </div>
  );
}

export default App;
