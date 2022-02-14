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
import Dish from "../../assets/DishDeleteMe.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleRecepieModule = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          image={Dish}
          alt="single dish"
        />
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
              <IconButton>
                <BookmarkBorderIcon />
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
                aria-label="add to favorites"
                sx={{ fontSize: "1em", color: "darkgrey" }}
              >
                <FavoriteBorderIcon />
                <Typography>253</Typography>
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
              <Typography>{props.timeEstimate} min</Typography>
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
      {/* old*/}
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="250"
          image={Dish}
          alt="single dish"
        />
        <CardContent>
          <Grid
            container
            rowSpacing={0}
            columnSpacing={0}
            sx={{ lineHeight: 0 }}
          >
            <Grid item xs={10}>
              <Typography variant="h5" component="div">
                <Box sx={{ fontWeight: "bold" }}>Rasberry pie</Box>
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h8">Dessert ∘ European</Typography>
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
                aria-label="add to favorites"
                sx={{ fontSize: "1em", color: "darkgrey" }}
              >
                {props.liked ? (
                  <FavoriteBorderIcon />
                ) : (
                  <FavoriteIcon sx={{ color: "Crimson" }} />
                )}
                <Typography>253</Typography>
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
              <Typography>30 min</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "darkgrey",
              }}
            >
              <LocalDiningIcon />
              <Typography>Medium</Typography>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleRecepieModule;
