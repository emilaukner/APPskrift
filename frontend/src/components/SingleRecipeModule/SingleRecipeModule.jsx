import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import { Link } from "react-router-dom";
import {showLogin} from "../Navbar/Navbar";

const SingleRecipeModule = (props) => {
  //React hooks with the states liked and saved
  const [liked, setLiked] = useState(props.likedByUser);
  const [saved, setSaved] = useState(props.savedByUser);
  const [cookie, setCookie] = useCookies(["user"]);

  /* Function that is called when user presses like button.
  If liked = true a delete request is made. If liked = false a post request is made.*/
  const LikeRecipe = (event) => {
    event.preventDefault();
    event.stopPropagation();
    liked ? postUnlikeRecipe() : postLikeRecipe();
  };

  /* Function that is called when user presses save button.
  If saved = true a delete request is made. If saved = false a post request is made.*/
  const SaveRecipe = (event) => {
    event.preventDefault();
    event.stopPropagation();
    saved ? postUnsaveRecipe() : postSaveRecipe();
  };

  //API request to like recipe
  const postLikeRecipe = async () => {
    await axios
      .post(`/users/${cookie.userId}/favorites/`, {
        id: `${props.recipeId}`,
      })
      .then(() => {
        setLiked(!liked);
      })
      .catch((error) => {
        console.log(error);
        props.onAuthFail();
      });
  };

  //API request to delete like on a recipe
  const postUnlikeRecipe = async () => {
    await axios
      .delete(`/users/${cookie.userId}/favorites/`, {
        data: {
          id: `${props.recipeId}`,
        },
      })
      .then(() => {
        setLiked(!liked);
      })
      .catch((error) => {
        console.log(error);
        props.onAuthFail();
      });
  };

  //API request to save recipe
  const postSaveRecipe = async () => {
    await axios
      .post(`/users/${cookie.userId}/saved/`, {
        id: `${props.recipeId}`,
      })
      .then(() => {
        setSaved(!saved);
      })
      .catch((error) => {
        console.log(error);
        props.onAuthFail();
      });
  };

  //API request to delete recipe from saved
  const postUnsaveRecipe = async () => {
    await axios
      .delete(`/users/${cookie.userId}/saved/`, {
        data: {
          id: `${props.recipeId}`,
        },
      })
      .then(() => {
        setSaved(!saved);
      })
      .catch((error) => {
        console.log(error);
        props.onAuthFail();
      });
  };

  return (
    <>
      <Link
        to={`/recipe/${props.recipeId}/`}
        style={{ textDecoration: "none" }}
      >
        <Card sx={{ maxWidth: 300 }}>
          <CardMedia component="img" height="250" image={props.image} />
          <CardContent>
            <Grid
              container
              rowSpacing={0}
              columnSpacing={0}
              sx={{ lineHeight: 0 }}
            >
              <Grid item xs={10}>
                <Typography variant="h5" component="div">
                  <Box sx={{ fontWeight: "bold" }}>{props.title}</Box>
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={SaveRecipe}>
                  {saved ? <BookmarkAddedIcon /> : <BookmarkBorderIcon />}
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h8">
                  {props.meal} ∘ {props.cousine}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ paddingTop: "11%" }} />
            <CardActions
              sx={{
                justifyContent: "space-around",
                lineHeight: 0,
                padding: 0,
              }}
            >
              <Box>
                <IconButton
                  onClick={LikeRecipe}
                  aria-label="add to favorites"
                  sx={{ fontSize: "1em", color: "darkgrey" }}
                >
                  {!liked ? (
                    <FavoriteBorderIcon />
                  ) : (
                    <FavoriteIcon sx={{ color: "Crimson" }} />
                  )}
                  <Typography>{props.numberOfLikes}</Typography>
                </IconButton>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "darkgrey",
                }}
              >
                <AccessTimeIcon />
                <Typography>{props.timeEstimate}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "darkgrey",
                }}
              >
                <LocalDiningIcon />
                <Typography>
                  {props.difficulty === "E"
                    ? "Easy"
                    : props.difficulty === "M"
                    ? "Medium"
                    : props.difficulty === "H"
                    ? "Hard"
                    : ""}
                </Typography>
              </Box>
            </CardActions>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};

export default SingleRecipeModule;
