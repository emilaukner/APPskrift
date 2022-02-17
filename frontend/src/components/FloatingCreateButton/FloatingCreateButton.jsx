import React from "react";
import { Box, Fab, Link } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';
import { StyledDiv } from "./style";

const buttonStyle = {
        right: "2.5%",
        bottom: "5%",
        position: "fixed",
    };

const CreateButton = (props) => {
    return (
        <>
        {props.showButton ? 
        <StyledDiv>
            <Link href='create-recipe'>
                <Box>
                    <Fab variant="extended">           
                        <EditIcon />
                        Create Recipe
                    </Fab>
                </Box>
            </Link>
        </StyledDiv>

         : null}
        </>
    );
};

export default CreateButton;