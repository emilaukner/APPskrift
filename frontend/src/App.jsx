import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./containers/FrontPage/FrontPage";
import CreateRecipePage from "./containers/CreateRecipePage/CreateRecipePage";
import UserRecipePage from "./containers/UserRecipePage/UserRecipePage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/my-recepies/">
            <UserRecipePage/>
          </Route>
          <Route path="/my-favorites/">
            <p>my favorites</p>
          </Route>
          <Route path="/saved-recepies/">
            <p> saved-recepies </p>
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
