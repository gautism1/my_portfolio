import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from './HOC/ErrorBoundary';
import './App.css';

const HeroHeader = lazy(() => import('./HeroHeader'));
const Projects = lazy(() => import('./Projects'));
const Contact = lazy(() => import('./Contact'));
const Skills = lazy(() => import('./Skills'));
const Nav = lazy(() => import('./Nav'));
const Footer = lazy(() => import('./footer'));

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());//React hooks used



  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode ]);// making into local storage




  function getInitialMode() {
    const isReturningUser = "dark" in localStorage;
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    const userPrefersDark = getPrefColorScheme();   //this gives the choice of the browser
    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }        //checks local storage and also checks preference of the browser



  function getPrefColorScheme() {    //here  this is the code of checking into browser mode  lEarn this code 
    if (!window.matchMedia) return;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }   ///


  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading Web App...</h1>}>
          <div className="App">
            <div className={darkMode ? "main dark-mode" : " main light-mode"}>  
              <Nav setDarkMode={setDarkMode} darkMode={darkMode}/>            
              <div className="this">
                <Switch>
                  <Route path="/" exact component={HeroHeader} />
                  <Route path="/Skills" component={Skills} />
                  <Route path="/Projects" component={Projects} />
                  <Route path="/Contact" component={Contact} />
                  <Route render={() => <p className="link">Not found</p>} />
                </Switch>
              </div>
              <Footer />
            </div>
          </div>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}
export default App;
