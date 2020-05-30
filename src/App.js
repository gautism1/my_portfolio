import React,  { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import './App.css';
 const Cent = lazy(() => import('./Cent'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const Skills = lazy(() => import('./Skills'));
const Nav = lazy(() => import('./Nav'));
const Footer = lazy(() => import('./footer'));

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    if (this.state.hasError) {
      return <p>Webapp Crashed  Please reload.</p>;
    }

    return this.props.children;
  }
}


function App() {
  return (
<Router>
<ErrorBoundary>
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
     </ErrorBoundary>

    </Router>
  );
}
export default App;
