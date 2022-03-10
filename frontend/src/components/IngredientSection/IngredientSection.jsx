import React from "react";
import Typography from "@mui/material/Typography";
import { List, ListItem, ListItemText } from '@mui/material';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


  
const IngredientSection = (props) => {

  const ingredientList = props.recipe.ingredients.split(',') 
  

  return (
    <>
    <Box>
      <Paper>
        <Grid container style={{padding:"10%"}}>
          <Grid item xs={12}>
            <Typography style={{fontSize: "2em", fontWeight: "bold"}}>Ingredienser</Typography>
            </Grid>
          <Grid item xs={12} style={{paddingTop:"15%"}}>
          <Divider/>
          <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> {ingredientList.map((value) => (          
          <ListItem key={value} disableGutters divider>    
            <ListItemText primary={value} />
          </ListItem>           
          ))}
          </List>
          </Grid>
        </Grid>
      </Paper>
    </Box>   
    </>
  );
};
export default IngredientSection;