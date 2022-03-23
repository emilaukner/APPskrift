import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DirectionSection from "../../components/DirectionSection/DirectionSection";
import IngredientSection from "../../components/IngredientSection/IngredientSection";
import SingleRecipeHeader from "../../components/SingleRecipeHeader/SingleRecipeHeader";
import CommentSection from "../../components/CommentSection/CommentSection";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Food from "../../assets/Food.png";
import { getThemeProps } from "@mui/system";

const SingleRecipePage = (props) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();
  useEffect(() => {
    axios.get(`/recipes/${id}/`).then((response) => {
      setRecipe(response.data);
    });
  }, []);
  let avatarImage = Food;

  // Bilder må legges inn i modellen, før den kan importeres hit

  if (!recipe) {
    return <>Could not find recipe</>;
  } else {
    avatarImage = recipe.image
  }

  return (
    <>
      <Grid container spacing={5} style={{ padding: "2%", margin: "0%" }}>
        <Grid item xs={3}>
          <Avatar
            src={avatarImage}
            variant="square"
            style={{ width: "100%", height: "100%" }}
          ></Avatar>
        </Grid>
        <Grid item xs={9}>
          <SingleRecipeHeader recipe={recipe} onAuthFail={props.onAuthFail} />
        </Grid>
        <Grid item xs={3}>
          <IngredientSection recipe={recipe} />
        </Grid>
        <Grid item xs={9}>
          <DirectionSection recipe={recipe} />
        </Grid>
        <Grid item xs={12}>
          <CommentSection recipe={recipe}/>
        </Grid>
      </Grid>
    </>
  );
};

export default SingleRecipePage;
