import React, {useState, useEffect} from "react";
import { Typography, Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";


  
const DirectionSection = () => {

  const { id } = useParams();  
  const [recipe, setRecipe] = useState(); 
  useEffect(() => {
    axios
      .get(`/recipes/${id}/`)
      .then((response) => {
        setRecipe(response.data);
      })
  })
  

  return (
    <>
      <Grid>
        <Typography style={{fontSize: "2em", fontWeight: "bold", margin:"4%", marginLeft: "5%"}}>Slik gjør du det</Typography>
      </Grid>
      <Grid style={{padding: "2%"}}>
        <p>heilo what is up</p>
      </Grid>

      
        
       
    </>
  );
};

export default DirectionSection;