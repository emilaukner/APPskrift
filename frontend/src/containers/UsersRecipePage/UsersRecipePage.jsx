import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SingleRecipeModule from "../../components/SingleRecipeModule/SingleRecipeModule";
import { Paper, Typography, Box, Grid } from "@mui/material";


const UsersRecipePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState();
  const [recipeData, setRecipes] = useState();

  console.log("ID", id)

  useEffect(() => {
    axios.get(`/users/${id}/`)
    .then((response) => {
      console.log(response);
      setUser(response.data);
    });
    axios.get(`/users/${id}/recipes/`)
    .then((response) => {
      setRecipes(response.data);
    })
  }, []);


  const createRecipeModules = () => {
    const recipes = recipeData
      .filter((recipe) => recipe.publishedBy === { id })
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
                {/* { user.username}'s oppskrifter */}
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

export default UsersRecipePage;