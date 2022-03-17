import React, { useState, useEffect } from "react";
import { Typography, Grid, Avatar } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CircleIcon from "@mui/icons-material/Circle";
import Food from "../../assets/Food.png";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleRecipeHeader = (props) => {
  const [user, setUser] = useState();
  const [recipe, setRecipe] = useState(props.recipe);

  console.log(props);

  useEffect(() => {
    axios
      .get(`/users/${props.recipe.publishedBy}/`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  if(user) {
    avatarImage = user.image;
    name = user.username;
  }

  return (
    <>
      <Box>
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
            {/* <Box style={{display: "flex", padding:"0.7%"}}>
                  <Rating 
                      name="half-rating-read"
                      defaultValue={score}
                      precision={0.5}
                      readOnly
                  />
                  <Typography style={{fontSize:"1em", color: "darkgrey"}}>{scoreNumber}</Typography>
                </Box>
                */}
            {FavoriteButton(props.recipe)}
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
            <Link to="/123/" style={{ textDecoration: "none" }}>
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
