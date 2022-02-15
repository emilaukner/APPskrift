import React from "react";
import { Box, Fab } from '@mui/material/';
import EditIcon from '@mui/icons-material/Edit';

const CreateButton = (props) => {
    return (
        <>
        {props.showButton ? 
            <div style={{right: "2.5%", bottom: "5%", position: "absolute"}}>
                <Box>
                    <Fab variant="extended">
                        <EditIcon />
                        Create Recipe
                    </Fab>
                </Box>
            </div> 
         : null}
        </>
    );
};

export default CreateButton;