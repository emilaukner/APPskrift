import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const SingelRecipeListModule = (props) => {

    return (
        <Grid
            container
            rowSpacing={2}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
            <Grid item xs={2}>
                <Typography
                    variant="RecipeDate"
                    gutterBottom
                    component="div"
                >
                    {props.date}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                    variant="RecipeNavn"
                    gutterBottom
                    component="div"
                >
                    {props.title}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                    variant="Difficulty"
                    gutterBottom
                    component="div"
                >
                    {props.difficulty === "E"
                  ? "Easy"
                  : props.difficulty === "M"
                  ? "Medium"
                  : props.difficulty === "H"
                  ? "Hard"
                  : ""}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                    variant="Evaluation"
                    gutterBottom
                    component="div"
                >
                    {props.evaluation}
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                    variant="TimeEstimate"
                    gutterBottom
                    component="div"
                >
                    {props.timeEstimate} min
                </Typography>
            </Grid>
            <Grid item xs={2}>
                <Typography
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                >
                    <Button
                        variant="contained"
                        //onClick={}
                      >
                        Edit
                    </Button>
                      
                    <Button
                        variant="contained"
                        color="error"
                        //onClick={}
                      >
                        Delete
                    </Button>
                </Typography>
            </Grid>
        </Grid>
    );
  };
  
  export default SingelRecipeListModule;