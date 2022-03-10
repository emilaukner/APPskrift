import React from "react";
import { Box, Fab } from "@mui/material/";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { StyledDiv } from "./style";

const CreateRecipeButton = (props) => {
  return (
    <>
      {props.showButton ? (
        <StyledDiv>
          <Link to="/create-recipe/" style={{ textDecoration: "none" }}>
            <Box>
              <Fab variant="extended">
                <EditIcon />
                Lag Oppskrift
              </Fab>
            </Box>
          </Link>
        </StyledDiv>
      ) : null}
    </>
  );
};

export default CreateRecipeButton;
