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
} from "@mui/material";
import Dish from "../../assets/DishDeleteMe.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const SingleRecepieModule = (props) => {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="210"
          image={Dish}
          alt="single dish"
        />
        <CardContent>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid item xs={10}>
              <Typography variant="h5" component="div">
                Rasberry pie
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <IconButton>
                <BookmarkBorderIcon />
              </IconButton>
            </Grid>
            <Grid item xs={12}>
              <p>Dessert * European</p>
            </Grid>
          </Grid>
          <Divider />
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites" sx={{ fontSize: "1em" }}>
              <FavoriteBorderIcon />
              <Typography>253</Typography>
            </IconButton>
            <AccessTimeIcon color="action" />
            <Typography>30 min</Typography>
            <LocalDiningIcon color="action" />
            <Typography>Medium</Typography>
          </CardActions>

          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default SingleRecepieModule;
