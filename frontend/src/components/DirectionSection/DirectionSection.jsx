import React from "react";
import { Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";



  
const DirectionSection = (props) => {


  //const steps = props.steps    HELP
  const steps = "hei dette er testing av test. Hit skal recipe.steps når det funker"
  

  return (
    <>
      <Box>
        <Paper>
            <Grid container style={{padding:"4%"}}>
                <Grid item xs={12}>
                    <Typography style={{fontSize: "2em", fontWeight: "bold"}}>Fremgangsmåte</Typography>
                     </Grid>
            <Grid item xs={12} style={{paddingTop:"3%"}}>
            <Typography paragraph={true}>{steps}</Typography> 
          </Grid>
        </Grid>
      </Paper>
    </Box>        
    </>
  );
};

export default DirectionSection;