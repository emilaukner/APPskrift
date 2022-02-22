import React, { useEffect, useState } from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import FloatingCreateRecipeButton from "../../components/FloatingCreateRecipeButton/FloatingCreateRecipeButton";
import Food from "../../assets/Food.png";
import SingleRecepieModule from "../../components/SingleRecipeModule/SingleRecipeModule";
import Dish from "../../assets/DishDeleteMe.png";
import axios from "axios";
import LogInPopUp from "../../components/LogInPopUp/LogInPopUp";

const FrontPage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeLikedData, setRecipeLikedData] = useState([]);
  const [recipeSavedData, setRecipeSavedData] = useState([]);

  //This function gets all liked recepies by current user
  const getRecipesLikedRequest = async () => {
    await axios
      .get(`/users/5791cd11-7f6a-4fc5-bbc3-bd09a289ca9d/favorites/`)
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
      .get(`/users/5791cd11-7f6a-4fc5-bbc3-bd09a289ca9d/saved/`)
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
    const recipes = recipeData.map((recipe) => {
      return (
        <SingleRecepieModule
          recipeId={recipe.recipeId}
          title={recipe.title}
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={recipe.estimate}
          difficulty={recipe.difficulty}
          likedByUser={recipeLikedData.includes(recipe.recipeId) ? true : false}
          savedByUser={recipeSavedData.includes(recipe.recipeId) ? true : false}
          numberOfLikes={253}
        />
      );
    });
    return recipes;
  };

  return (
    <>
      <FullWidthImageHeader imgHeader={Food} />

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
      <FloatingCreateRecipeButton showButton={true} />
			<LogInPopUp visible={true}/>
    </>
  );
};

export default FrontPage;
