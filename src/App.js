import React,  { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
 const Cent = lazy(() => import('./Cent'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const Skills = lazy(() => import('./Skills'));
const Nav = lazy(() => import('./Nav'));
const Footer = lazy(() => import('./footer'));
function App() {
  return (
<Router>

  <Suspense fallback={<h1>Loading Web App...</h1>}>
      <div className="App">
      <div className="main">
        <Nav/>
        <div className="this">
        <Switch>
           <Route path="/" exact component={Cent} />
           <Route path="/Skills" component={Skills}/>
           <Route path="/Projects" component={Projects}/>
           <Route path="/Contact" component={Contact}/>
        </Switch>
        </div> 
       </div>
       <Footer/>
    </div>
    </Suspense>

    </Router>
  );
}
export default App;
