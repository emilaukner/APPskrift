import React from "react";
import { Box, Fab } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

const CreateRecipeButton = (props) => {
  return (
    <>
      {props.showButton ? (
        <Link to="/create-recipe/">
          <div style={{ right: "2.5%", bottom: "5%", position: "absolute" }}>
            <Box>
              <Fab variant="extended">
                <EditIcon />
                Create Recipe
              </Fab>
            </Box>
          </div>
        </Link>
      ) : null}
    </>
  );
};

export default CreateRecipeButton;
