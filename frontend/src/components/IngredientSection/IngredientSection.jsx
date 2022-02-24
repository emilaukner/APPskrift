import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from '@mui/material';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";


const random = "ost, 3 løk, 500 g kjøtdeig"; 
const tester = [{ing: "1 løk", ing: "2 løk"}, {ing: "3 løk"}]; 
  
const IngredientSection = () => {

  const { id } = useParams();  
  const [recipe, setRecipe] = useState(); 
  useEffect(() => {
    axios
      .get(`/recipes/${id}/`)
      .then((response) => {
        setRecipe(response.data);
      })
  })
  const ingredientList = random.split(',');
  console.log(ingredientList);
  

  return (
    <>
    <Box style={{width:"20%"}}>
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