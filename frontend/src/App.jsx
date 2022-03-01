import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./containers/FrontPage/FrontPage";
import CreateRecipePage from "./containers/CreateRecipePage/CreateRecipePage";
import UserRecipePage from "./containers/UserRecipePage/UserRecipePage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyRecipesPage from "./containers/MyRecipesPage/MyRecipesPage";
import SingleRecipePage from "./containers/SingleRecipePage/SingleRecipePage";
import CreateUser from "./components/CreateUser/CreateUser";
import SavedRecipesPage from "./containers/SavedRecipesPage/SavedRecipesPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ backgroundColor: "#F8F8F8" }}>
        <Switch>
          <Route exact path="/">
            <FrontPage />
          </Route>
          <Route path="/create-new-account/">
            <CreateUser />
          </Route>
          <Route path="/my-recipes/">
            <MyRecipesPage />
          </Route>
          <Route path="/my-favorites/">
            <p>my favorites</p>
          </Route>
          <Route path="/saved-recipes/">
            <SavedRecipesPage />
          </Route>
          <Route path="/create-recipe/">
            <CreateRecipePage />
          </Route>
          <Route path="/recipe/:id">
            <SingleRecipePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
