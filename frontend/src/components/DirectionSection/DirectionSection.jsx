import React from "react";
import { Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";



  
const DirectionSection = (props) => {

  const createParagraphedSteps = () => {
    const steps = props.recipe.steps.split('\n')
    console.log(steps);

    return steps.map((step) =>
      <Typography paragraph={true}>{step}</Typography> 
    )
  }

  return (
    <>
      <Box>
        <Paper>
            <Grid container style={{padding:"4%"}}>
                <Grid item xs={12}>
                    <Typography style={{fontSize: "2em", fontWeight: "bold"}}>Fremgangsmåte</Typography>
                     </Grid>
            <Grid item xs={12} style={{paddingTop:"3%"}}>
            {createParagraphedSteps()}
          </Grid>
        </Grid>
      </Paper>
    </Box>        
    </>
  );
};

export default DirectionSection;