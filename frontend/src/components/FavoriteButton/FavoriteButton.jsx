import React from "react";
import { Typography, IconButton } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import axios from "axios";
import { useCookies } from "react-cookie"; 



  
const FavoriteButton = (props) => {

    // Byttes ut med props.likedByUser    HELP
    const likedByUser = true; 
    // Byttes ut med props.numberOfLikes    HELP
    const numberOfLikes = 325; 
    
    //React hooks with the states liked and saved
    const [liked, setLiked] = useState(likedByUser);
    const [cookie, setCookie] = useCookies(["user"])

    /* Function that is called when user presses like button.
  If liked = true a delete request is made. If liked = false a post request is made.*/
    const LikeRecipe = (event) => {
        event.preventDefault();
        event.stopPropagation();
        liked ? postUnlikeRecipe() : postLikeRecipe();
      };

    //API request to like recipe
    //TODO change hardcoded userId to `${currentUserId}`
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
        });
    };
    

    //API request to delete like on a recipe
    //TODO change hardcoded userId to `${currentUserId}`
    const postUnlikeRecipe = async () => {
        await axios
        .delete(`/users/${cookie.userId}d/favorites/`, {
                    data: {
                        id: `${props.recipeId}`,
                    }
        })
        .then(() => {
            setLiked(!liked);
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <>
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
            <Typography>{numberOfLikes}</Typography>
        </IconButton>
    </Box>        
    </>
  );
};

export default FavoriteButton;