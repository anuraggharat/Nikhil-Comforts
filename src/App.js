import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus'
import Projects from './Pages/Projects';
import ScrollToTop from './Components/ScrollToTop';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Project from './Pages/Project';
import Career from './Pages/Career';
import Hvac from './Pages/Services/HVAC'
import Mep from './Pages/Services/MEP'
import Interiors from './Pages/Services/Interiors'
import EnergyConsultation from './Pages/Services/EnergyConsultation'
import Bms from './Pages/Services/BMS'
import Retrofitting from './Pages/Services/Retrofitting'



function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus"  exact component={Aboutus} />
          <Route path="/projects"  exact component={Projects} />
          <Route path="/hvac" component={Hvac} />
          <Route path="/mep" component={Mep} />
          <Route path="/interiors" component={Interiors} />
          <Route path="/energyconsultation" component={EnergyConsultation} />
          <Route path="/retrofitting" component={Retrofitting} />
          <Route path="/bms" component={Bms} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blogs/:slug"  component={Blog} />
          <Route path="/projects/:slug" exact component={Project} />
          <Route path="/career" exact component={Career} />

        </Switch>
        <Footer />
        </ScrollToTop>
      </Router>


    </div>
  );
}

export default App;
