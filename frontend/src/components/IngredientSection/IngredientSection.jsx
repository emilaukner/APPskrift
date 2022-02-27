import React, {useState, useEffect} from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useParams } from "react-router-dom";
import { List, ListItem, ListItemText } from '@mui/material';


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
      .catch((error) => {
        console.log(error);
      })
  })

  
  const ingredientList = ["lol", "lol"];
  
  

  return (
    <>
      <Typography style={{fontSize: "2em", fontWeight: "bold", margin:"4%", marginLeft: "5%"}}>Ingredienser</Typography>

      
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}> {ingredientList.map((value) => (
          <ListItem key={value} disableGutters>
        
            <ListItemText primary={value} />
          </ListItem>
        ))}
        </List>
    </>
  );
};

/* <div>
        {ingredientList.map((ingredient, index) => (
          <>
            <hr style={{margin:"2%", marginLeft:"5%", border:"1px solid lightgrey"}}></hr>
            <Typography style={{fontSize: "1em", margin:"2%", marginLeft: "7%"}}key={index} item={ingredient}>{ingredient.key}</Typography>
            </>
          ))}    
      </div>    */

export default IngredientSection;