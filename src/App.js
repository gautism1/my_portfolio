import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorBoundary from "./HOC/ErrorBoundary";
import Loader from "./Loader";
import Nav from "./Nav";
import Footer from "./footer";
import "./App.css";

const HeroHeader = lazy(() => import("./HeroHeader"));
const Projects = lazy(() => import("./Projects"));
const Contact = lazy(() => import("./Contact"));
const Skills = lazy(() => import("./Skills"));

function App() {
  const [darkMode, setDarkMode] = React.useState(getInitialMode());
  
  React.useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);
  
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
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<h1>Loading Web App...</h1>}>
        <div className="App">
          <div className={darkMode ? "main dark-mode" : " main light-mode"}>
            <Router>
              <Nav setDarkMode={setDarkMode} darkMode={darkMode} />
              <div className="this">
                <Suspense fallback={<Loader />}>
                  <Switch>
                    <Route exact path="/" component={HeroHeader} />
                    <Route path="/Skills" component={Skills} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/Contact" component={Contact} />
                    <Route
                      path="*"
                      render={() => <p className="link">Not found</p>}
                    />
                  </Switch>
                </Suspense>
              </div>
            </Router>
            <Footer />
          </div>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}
export default App;
