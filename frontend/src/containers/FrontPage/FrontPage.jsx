import React, { useEffect, useState } from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import FloatingCreateRecipeButton from "../../components/FloatingCreateRecipeButton/FloatingCreateRecipeButton";
import Food from "../../assets/Food.png";
import SingleRecipeModule from "../../components/SingleRecipeModule/SingleRecipeModule";
import Dish from "../../assets/DishDeleteMe.png";
import axios from "axios";
import CreateUser from "../../components/CreateUser/CreateUser";
import { ToggleButtonGroup, ToggleButton, Paper } from "@mui/material";
import { Box, Grid, Divider, Typography } from "@mui/material";
import UserProfileComponent from "../../components/UserProfileComponent/UserProfileComponent";
import { useCookies } from "react-cookie";
import { getFilteredRecipes } from "./helpers";
import { width } from "@mui/system";
import SearchBar from "../../components/SearchBar/SearchBar";
import CommentSection from "../../components/CommentSection/CommentSection";

const FrontPage = ({onAuthFail, userLoggedIn}) => {
  //TODO make catogories a own component
  //===============Categories selection =======================//
  const [meal, setMeal] = useState(() => []);
  const [estimate, setEstimate] = useState(() => []);
  const [difficulty, setDifficulty] = useState(() => []);
  const [cousine, setCousine] = useState(() => []);
  const [otherCategories, setOtherCategories] = useState(() => []);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangeMeal = (event, newMeal) => {
    setMeal(newMeal);
  };

  const handleChangeEstimate = (event, newEstimate) => {
    setEstimate(newEstimate);
  };

  const handleChangeDifficulty = (event, newDifficulty) => {
    setDifficulty(newDifficulty);
  };

  const handleChangeCousine = (event, newCouisine) => {
    setCousine(newCouisine);
  };

  const handleChangeOtherCategories = (event, newOtherCategories) => {
    setOtherCategories(newOtherCategories);
  };

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };
  //====================== Category end================================//

  const [recipeData, setRecipeData] = useState([]);
  const [recipeLikedData, setRecipeLikedData] = useState([]);
  const [recipeSavedData, setRecipeSavedData] = useState([]);
  const [loginShow, setLoginShow] = useState(true);

  const [cookie, setCookie] = useCookies(["user"]);

//On load of page these api requests are made to get data

  //This function gets all liked recipes by current user
  const getRecipesLikedRequest = async () => {
    await axios
      .get(`/users/${cookie.userId}/favorites/`)
      .then((response) => {
        setRecipeLikedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRecipesLikedRequest();
  }, []);

  //This function gets all saved recipes by current user
  const getRecipesSavedRequest = async () => {
    await axios
      .get(`/users/${cookie.userId}/saved/`)
      .then((response) => {
        setRecipeSavedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRecipesSavedRequest();
  }, []);

  //This function gets all recipes in database
  const getRecipesRequest = async () => {
    await axios
      .get("/recipes/")
      .then((response) => {
        setRecipeData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getRecipesRequest();
  }, []);

  const createRecipeModules = () => {
    const recipes = getFilteredRecipes(
      recipeData,
      meal,
      estimate,
      difficulty,
      cousine,
      otherCategories,
      searchTerm
    ).map((recipe) => {
      console.log(recipe);
      return (
        <SingleRecipeModule
          recipeId={recipe.recipeId}
          title={recipe.title}
          image={recipe.image}
          meal={recipe.meal}
          cousine={recipe.cousine}
          timeEstimate={recipe.estimate}
          difficulty={recipe.difficulty}
          likedByUser={recipeLikedData.includes(recipe.recipeId) ? true : false}
          savedByUser={recipeSavedData.includes(recipe.recipeId) ? true : false}
          numberOfLikes={recipe.nbOfLikes}
          onAuthFail={() => onAuthFail()}
        />
      );
    });
    return recipes;
  };

  return (
    <>
      <FullWidthImageHeader imgHeader={Food} />

      {/* TODO move category to own component*/}
      <Box
        sx={{
          marginTop: "1%",
        }}
      >
        <Grid container>
          <Grid item xs />
          <Grid container xs={10}>
            <Paper>
              <Grid container rowSpacing={1} sx={{ padding: "2%" }}>
                <Grid container direction="row" justifyContent="center">
                  <Grid item lg={12}>
                    <SearchBar handleSearch={handleSearch} />
                  </Grid>
                </Grid>
                <Grid item xs={3}>
                  <Grid item>
                    <Typography variant="caption">Måltid</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={meal}
                      onChange={handleChangeMeal}
                    >
                      <ToggleButton value="Frokost">Frokost</ToggleButton>
                      <ToggleButton value="Lunsj">Lunsj</ToggleButton>
                      <ToggleButton value="Middag">Middag</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid item>
                    <Typography variant="caption">Kjøkken</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={cousine}
                      onChange={handleChangeCousine}
                    >
                      <ToggleButton value="Europeisk">Europeisk</ToggleButton>
                      <ToggleButton value="Asiatisk">Asiatisk</ToggleButton>
                      <ToggleButton value="Fransk">Fransk</ToggleButton>
                      <ToggleButton value="Amerikansk">Amerikansk</ToggleButton>
                      <ToggleButton value="Indisk">Indisk</ToggleButton>
                      <ToggleButton value="Annet">Annet</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
                <Grid item xs={5}>
                  <Grid item>
                    <Typography variant="caption">Tidsestimat</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={estimate}
                      onChange={handleChangeEstimate}
                    >
                      <ToggleButton value="15 min">15 min</ToggleButton>
                      <ToggleButton value="30 min">30 min</ToggleButton>
                      <ToggleButton value="45 min">45 min</ToggleButton>
                      <ToggleButton value="1 time">1 time</ToggleButton>
                      <ToggleButton value="Over 1 time">
                        Over 1 time
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>

                <Grid item xs={3}>
                  <Grid item>
                    <Typography variant="caption">Vanskelighetsgrad</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={difficulty}
                      onChange={handleChangeDifficulty}
                    >
                      <ToggleButton value="E">Easy</ToggleButton>
                      <ToggleButton value="M">Medium</ToggleButton>
                      <ToggleButton value="H">Hard</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Grid item>
                    <Typography variant="caption">Øvrige kategorier</Typography>
                  </Grid>
                  <Grid item>
                    <ToggleButtonGroup
                      color="primary"
                      size="small"
                      value={otherCategories}
                      onChange={handleChangeOtherCategories}
                    >
                      <ToggleButton value="Vegetar">Vegetar</ToggleButton>
                      <ToggleButton value="Glutenfri">Glutenfri</ToggleButton>
                      <ToggleButton value="Laktosefri">Laktosefri</ToggleButton>
                      <ToggleButton value="Sterkt">Sterkt</ToggleButton>
                    </ToggleButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs />
        </Grid>
      </Box>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridGap: "20px",
            justifyContent: "space-around",
            paddingTop: "5%",
            paddingBottom: "1%",
          }}
        >
          {createRecipeModules()}
        </div>
      </div>
      <UserProfileComponent showProfile={true} />
      <FloatingCreateRecipeButton showButton={userLoggedIn}/> 
    </>
  );
};

export default FrontPage;
