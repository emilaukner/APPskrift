import React from "react";
import Typography from "@mui/material/Typography";


const tester = [{ing: "1 løk"}, {ing: "2 løk"}, {ing: "3 løk"}]; 
  
const IngredientSection = () => {
  return (
    <>
      <Typography style={{fontSize: "2em", fontWeight: "bold", margin:"4%", marginLeft: "5%"}}>Ingredienser</Typography>

      <div>
        {tester.map((ingrediens) => (
          <>
            <hr style={{margin:"2%", marginLeft:"5%", border:"1px solid lightgrey"}}></hr>
            <Typography style={{fontSize: "1em", margin:"2%", marginLeft: "7%"}}>{ingrediens.ing}</Typography>
            </>
          ))}    
      </div>   
      
    </>
  );
};

export default IngredientSection;