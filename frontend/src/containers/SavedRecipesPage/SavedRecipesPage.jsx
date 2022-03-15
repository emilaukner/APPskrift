import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Paper, Typography, Box, Grid } from "@mui/material";
import SingleRecipeModule from "../../components/SingleRecipeModule/SingleRecipeModule";
import Dish from "../../assets/DishDeleteMe.png";

const SavedRecipesPage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeLikedData, setRecipeLikedData] = useState([]);
  const [recipeSavedData, setRecipeSavedData] = useState([]);

  const [cookie, setCookie] = useCookies(["user"]);

  //This function gets all liked recepies by current user
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

  //This function gets all saved recepies by current user
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

  //This function gets all recepies in database
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

  //On load of page these api requests is made to get data
  useEffect(() => {
    getRecipesLikedRequest();
    getRecipesSavedRequest();
    getRecipesRequest();
  }, []);

  const createRecipeModules = () => {
    console.log("Saved:", recipeSavedData);
    console.log("Liked:", recipeLikedData);
    const recipes = recipeData
      .filter((recipe) => recipeSavedData.includes(recipe.recipeId))
      .map((recipe) => {
        return (
          <SingleRecipeModule
            recipeId={recipe.recipeId}
            title={recipe.title}
            image={recipe.image}
            meal={recipe.meal}
            cousine={recipe.cousine}
            timeEstimate={recipe.estimate}
            difficulty={recipe.difficulty}
            likedByUser={
              recipeLikedData.includes(recipe.recipeId) ? true : false
            }
            savedByUser={
              recipeSavedData.includes(recipe.recipeId) ? true : false
            }
            numberOfLikes={253}
          />
        );
      });
    return recipes;
  };

  return (
    <>
      <Box>
        <Grid container style={{ paddingTop: "2%" }}>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <Paper>
              <Typography
                variant="h4"
                component="div"
                gutterBottom
                sx={{ padding: "3%", textAlign: "center" }}
              >
                Lagrede oppskrifter
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "0%",
          paddingBottom: "4%",
        }}
      >
        {createRecipeModules()}
      </div>
    </>
  );
};

export default SavedRecipesPage;
