import React, { useEffect, useState } from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import Food from "../../assets/Food.png";
import SingleRecepieModule from "../../components/SingleRecipeModule/SingleRecipeModule";
import Dish from "../../assets/DishDeleteMe.png";
import axios from "axios";

const FrontPage = () => {
  const [recipeData, setRecipeData] = useState([]);
  const [recipeLikedData, setRecipeLikedData] = useState([]);
  const [recipeSavedData, setRecipeSavedData] = useState([]);

  //This function gets all liked recepies by current user
  const getRecipesLikedRequest = async () => {
    await axios
      .get(`/users/${currentUserId}/favorites/`)
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
      .get(`/users/${currentUserId}/saved/`)
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
        console.log(response);
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
    const recipes = recipeData.map((recipe) => {
      return (
        <SingleRecepieModule
          recipieId={recipe.id}
          title={recipe.title}
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={recipe.estimate}
          difficulty={recipe.difficulty}
          likedByUser={recipeLikedData.includes(id) ? true : false}
          savedByUser={recipeSavedData.includes(id) ? true : false}
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
    </>
  );
};

export default FrontPage;
