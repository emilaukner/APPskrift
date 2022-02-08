import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./containers/FrontPage/FrontPage";
import CreateRecipePage from "./containers/CreateRecipePage/CreateRecipePage";
import "./App.css";

function App() {
  return (
    <Router>
      <p>Navbar</p>
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/my-recepies/">
            <p>My recepies page</p>
          </Route>
          <Route path="/create-recipe/">
            <CreateRecipePage />
          </Route>
        </Switch>
      </div>
      <p>Footer component</p>
    </Router>
  );
}

export default App;
