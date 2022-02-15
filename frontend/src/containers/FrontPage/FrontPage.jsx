import React, { useEffect, useState } from "react";
import FullWidthImageHeader from "../../components/FullWidthImageHeader/FullWidthImageHeader";
import Food from "../../assets/Food.png";
import SingleRecepieModule from "../../components/SingleRecepieModule/SingleRecepieModule";
import Dish from "../../assets/DishDeleteMe.png";
import axios from "axios";

const FrontPage = () => {

	const [recipeData, setRecipeData] = useState([]);

	useEffect(() => {
		getRecipesRequest();
	}, [])

	const getRecipesRequest = async () => {
    await axios
      .get("/recipes")
      .then(function (response) {
        console.log(response);
				setRecipeData(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

	const createRecipeModules = () => {
		const recipes = recipeData.map((recipe) => {
			return(
				<SingleRecepieModule
          title={recipe.title}
          image={Dish}
          meal="Dessert"
          cousine="European"
          timeEstimate={recipe.estimate}
          difficulty={recipe.difficulty}
          likedByUser={false}
          numberOfLikes={253}
        />
			);
		});
		return recipes;
	}

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
