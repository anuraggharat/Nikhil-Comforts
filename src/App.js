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
import ScrollToTop from './Components/ScrollToTop';
import Blogs from './Pages/Blogs';
import Blog from './Pages/Blog';
import Project from './Pages/Project';
import Career from './Pages/Career';

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
          <Route path="/services" component={Services} />
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
