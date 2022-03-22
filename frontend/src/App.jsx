import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FrontPage from "./containers/FrontPage/FrontPage";
import CreateRecipePage from "./containers/CreateRecipePage/CreateRecipePage";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MyRecipesPage from "./containers/MyRecipesPage/MyRecipesPage";
import SingleRecipePage from "./containers/SingleRecipePage/SingleRecipePage";
import CreateUser from "./components/CreateUser/CreateUser";
import SavedRecipesPage from "./containers/SavedRecipesPage/SavedRecipesPage";
//import UsersRecipePage from "./containers/UsersRecipePage/UsersRecipePage";
import LogInPopUp from "./components/LogInPopUp/LogInPopUp";
import { useState } from "react";
import { useCookies } from "react-cookie";

import Box from "@mui/material/Box";
import EditRecipePage from "./containers/EditRecipePage/EditRecipePage";


function App() {
  const [loginShow, setLoginShow] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [alertMessage, setAlertMessage] = useState();

  const onAuthfailed = () => {
    setLoginShow(true);
    setAlertMessage("Du må være logget inn for å bruke denne funksjonaliteten")
  }

  const handleLogInComplete = (user) => {
    setCookie("userId", user.userId);
    setLoginShow(false);
    window.location.reload(false);
  };

  return (
    <Router>
      <LogInPopUp
        onSuccess={handleLogInComplete}
        onClose={() => setLoginShow(false)}
        show={loginShow}
        alertMessage={alertMessage}
      />
      <Navbar />
      <Box sx={{ bgcolor: "background.default" }}>
        <Switch>
          <Route exact path="/">
            <FrontPage onAuthFail={onAuthfailed} userLoggedIn={cookie.userId != null} />
          </Route>
          <Route path="/create-new-account/">
            <CreateUser />
          </Route>
          <Route path="/my-recipes/">
            <MyRecipesPage onAuthFail={onAuthfailed} />
          </Route>
          <Route path="/my-favorites/">
            <p>my favorites</p>
          </Route>
          <Route path="/saved-recipes/">
            <SavedRecipesPage onAuthFail={onAuthfailed} />
          </Route>
          <Route path="/create-recipe/">
            <CreateRecipePage onAuthFail={onAuthfailed} />
          </Route>
          <Route path="/recipe/:id">
            <SingleRecipePage onAuthFail={onAuthfailed}/>
          </Route>
          <Route path="/edit-recipe/:id">
            <EditRecipePage onAuthFail={onAuthfailed}/>
          </Route>
          <Route path="/user/recipes/:id">
            UserRecipes
          </Route>
        </Switch>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
