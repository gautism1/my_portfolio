import React,  { Suspense, lazy } from 'react';
 import Cent from './Cent';
import './App.css';
import  Projects from './Projects';
import Contact from './Contact';
 import Skills from './Skills';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Nav from './Nav';
import Footer from './footer';
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
