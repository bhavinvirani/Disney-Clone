import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Main from "./components/Main";
import Home from "./components/Home";

import Header from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Switch>
          <Route exact path="/main">
            <Main />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
