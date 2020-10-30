import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import ContactPage from './component/Home/Contact/ContactPage';
import BlogPage from './component/Home/Blog/BlogPage';
import Project from './component/Home/Project/Project';
import ServicesPage from './component/Home/Services/ServicesPage';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
        <Route path="/blog">
          <BlogPage></BlogPage>
        </Route>
        <Route path="/project">
          <Project></Project>
        </Route>
        <Route path="/servicePage">
          <ServicesPage></ServicesPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
