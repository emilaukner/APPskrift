import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DirectionSection from "../../components/DirectionSection/DirectionSection";
import IngredientSection from "../../components/IngredientSection/IngredientSection";
import SingleRecipeHeader from "../../components/SingleRecipeHeader/SingleRecipeHeader";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Food from "../../assets/Food.png";

const SingleRecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(); 
  useEffect(() => {
    axios
      .get(`/recipes/${id}/`)
      .then((response) => {
        setRecipe(response.data);
      })
  })
  const avatarImage = Food; 

  // Bilder må legges inn i modellen, før den kan importeres hit

  return (
    <>
      <Grid container spacing={5} style={{padding:"2%"}}>
        <Grid item xs={3}>
          <Avatar src={avatarImage} variant="square" style={{width:"100%", height:"100%"}}></Avatar>
        </Grid>
        <Grid item xs={9}>{SingleRecipeHeader(recipe)}</Grid>
        <Grid item xs={3}>{IngredientSection(recipe)}</Grid>
        <Grid item xs={9}>{DirectionSection(recipe)}</Grid>
      </Grid>
      
      
  
    </>
  );
};

export default SingleRecipePage;
