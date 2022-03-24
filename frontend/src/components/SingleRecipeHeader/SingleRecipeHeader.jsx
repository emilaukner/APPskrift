import React, { useState, useEffect } from "react";
import { Typography, Grid, Avatar, IconButton,} from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleIcon from "@mui/icons-material/Circle";
import Food from "../../assets/Food.png";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleRecipeHeader = (props) => {
  const [recipeUser, setRecipeUser] = useState(props.user);
  useEffect(() => {
    axios
      .get(`/users/${props.recipe.publishedBy}/`)
      .then((res) => {   
         setRecipeUser(res.data)
      })
      .catch((error) => {
        console.log(error)
      }) 
  }, []);
  const [recipe, setRecipe] = useState(props.recipe);
  const [liked, setLiked] = useState(props.likedByUser);
  const [nbOfLikes, setNbOfLikes] = useState(props.numberOfLikes); 
  const [recipeLikedData, setRecipeLikedData] = useState([]); 
  const [cookie, setCookie, removeCookie] = useCookies(["user"]);
  const [ratingValue, setValue] = useState(props.recipe.avgEvaluation);
  const [showRating, setShowRating] = useState(true);

  /* Function that is called when user presses like button.
  If liked = true a delete request is made. If liked = false a post request is made.*/
  const LikeRecipe = (event) => {
    console.log(liked);
    event.preventDefault();
    event.stopPropagation();
    liked ? postUnlikeRecipe() : postLikeRecipe();
  };

  //API request to like recipe
  const postLikeRecipe = async () => {
    setNbOfLikes(nbOfLikes+1);
    await axios
      .post(`/users/${cookie.userId}/favorites/`, {
        id: `${props.recipe.recipeId}`,
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
    setNbOfLikes(nbOfLikes-1);
    await axios
      .delete(`/users/${cookie.userId}/favorites/`, {
        data: {
          id: `${props.recipe.recipeId}`,
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


useEffect(() => {
    axios
      .get(`/recipes/${props.recipe.recipeId}/`)
      .then((response) => {
        setNbOfLikes(response.data.nbOfLikes)
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);

useEffect(() => {
      axios
        .get(`/users/${cookie.userId}/favorites/`)
        .then((response) => {
          setRecipeLikedData(response.data)
          setLiked(response.data.includes(recipe.recipeId) ? true : false)
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);

useEffect(() => {
      axios
        .get(`/recipes/${props.recipe.recipeId}/`)
        .then((response) => {
          setNbOfLikes(response.data.nbOfLikes)
        })
        .catch((error) => {
          console.log(error);
        });
      }, []);

useEffect(() => {
      axios
        .get(`/users/${props.recipe.publishedBy}/`)
        .then((res) => {
          setRecipeUser(res.data)
        })
        .catch((error) => {
          console.log(error)
        }) 
  }, []);

useEffect(() => {       
      axios
      .get(`/recipes/${props.recipe.recipeId}/`)
      .then((response) => {
        setValue(response.data.avgEvaluation)
        console.log(response.data.avgEvaluation)
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  const setRating = ((newValue) => {
    axios
      .post(`/evaluations/`, {
        stars : newValue,
        publishedBy : cookie.userId,
        recipe : props.recipe.recipeId,
      })
  });

  //const title = props.title    HELP
  const title = props.recipe.title;
  //const score = props.score    HELP
  const score = 4.5;
  const scoreNumber = 250;
  //const numberOfLikes = props.numberOfLikes    HELP
  const numberOfLikes = 355;
  let difficulty = "Enkel";
  switch (props.recipe.difficulty) {
    case "E":
      difficulty = "Enkel";
      break;
    case "M":
      difficulty = "Medium";
      break;
    case "H":
      difficulty = "Vanskelig";
      break;
  }
  const time = props.recipe.estimate;
  let name = "Name";
  let avatarImage = Food;

  if(recipeUser) {
    avatarImage = recipeUser.image;
    name = recipeUser.username;
  }

  return (
    <>
      <Box sx={{color: "text.primary"}}>
        <Grid container style={{ padding: "0%" }}>
          <Grid item xs={12} style={{ padding: "1%" }}>
            <Typography style={{ fontSize: "3em", fontWeight: "bold" }}>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ paddingBottom: "2%", paddingLeft: "1%", display: "flex" }}
          >
            <Box style={{display: "flex", padding:"0.7%"}}>
              {showRating ? 
                          (<Rating 
                            name="simple-controlled"
                            value = {ratingValue}
                            precision={0.5}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                              setRating(newValue);
                              setShowRating(false);
                            }}
                        />) : (
                          <Rating 
                          name="simple-controlled"
                          value = {ratingValue}
                          precision={0.5}
                          readOnly
                          
                      />
                        )
            }

                  <Typography style={{fontSize:"1em", color: "darkgrey"}}>{ratingValue}</Typography>
                </Box>
              
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
                  <Typography>{nbOfLikes}</Typography>
                </IconButton>
              </Box>
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12} style={{ display: "flex", padding: "1%" }}>
            <Typography>{difficulty}</Typography>
            <CircleIcon
              sx={{ color: "darkgrey", fontSize: "7px", padding: "7px" }}
            ></CircleIcon>
            <Typography>{time}</Typography>
          </Grid>
          <Grid item xs={12} style={{ display: "flex", padding: "1%" }}>
            <Link to={`/user/recipes/${props.recipe.publishedBy}`} style={{ textDecoration: "none" }}>
              <Avatar
                src={avatarImage}
                style={{ height: 56, width: 56 }}
              ></Avatar>
            </Link>
            <Typography style={{ padding: 14, align: "center" }}>
              {name}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SingleRecipeHeader;
