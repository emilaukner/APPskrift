import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./containers/FrontPage/FrontPage";
import './App.css';

function App() {
  return (
    <Router>
      <p>Navbar</p>
      <div style={{backgroundColor: "lightgray"}}>
        <Switch>
          <Route exact path="/">
            <FrontPage/>
          </Route>
          <Route path="/my-recepies/">
            <p>My recepies page</p>
          </Route>
        </Switch>
      </div>
      <p>Footer component</p>
  </Router>
  );
}

export default App;
