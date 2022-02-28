import { useCookies } from "react-cookie";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

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
          <SingleRecepieModule
            recipeId={recipe.recipeId}
            title={recipe.title}
            image={Dish}
            meal="Dessert"
            cousine="European"
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
      <Typography
        variant="h4"
        component="div"
        gutterBottom
        sx={{ paddingLeft: "5%", paddingTop: "5%" }}
      >
        Lagrede oppskrifter
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "10%",
          paddingBottom: "4%",
        }}
      >
        {createRecipeModules()}
      </div>
    </>
  );
};

export default SavedRecipesPage;
