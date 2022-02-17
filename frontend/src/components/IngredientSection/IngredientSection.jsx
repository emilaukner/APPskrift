import { MenuItem } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";


const tester = [{ing: "1 løk"}, {ing: "2 løk"}, {ing: "3 løk"}]; 
  
const IngredientSection = () => {
  return (
    <>
      <Typography textAlign="center" style={{}}>Ingredienser</Typography>

      <div>
        {tester.map((ingrediens) => (
          <p>{ingrediens.ing}</p>
        ))}       
      </div>   
      
    </>
  );
};

export default IngredientSection;