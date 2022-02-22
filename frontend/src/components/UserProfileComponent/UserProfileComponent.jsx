import React from "react";
import { StyledDiv } from "./style";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import ReactRoundedImage from "react-rounded-image";

 

const UserProfileComponent = () => {
    const [userID, setUserID] = useState("");
    const [userImage, setImage] = useState("qq");
    const [firstName, setfirstName] = useState("xx");
    const [lastName, setlastName] = useState("yy");
    const [email, setemail] = useState("eeS");


  return (
    <>
      <StyledDiv>
      <Box sx={{ width: "100%" }}>
            <Grid
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}>


                <Box sx={{ width: "100%" }}>
                    <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={2} />
                        <Grid item xs={8}>
                            <ReactRoundedImage image={userImage} roundedSize="0"/>
                        </Grid>
                        <Grid item xs={2}>
                            <Grid
                                direction="Column"
                                justifyContent="center"
                                alignItems="center">

                                <Grid item xs={10}/>
                                <Grid item xs={2}>
                                <Button variant="contained">Edit</Button>  
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
                
                
                <Box sx={{ width: "100%" }}>

                    <Grid 
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        columns={14}>
                        <Grid item xs={2}>
                            <Typography variant="h4"> 
                                {firstName} 
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography variant="h4">
                                {lastName}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="text" color="blue">Endre navn</Button>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>
                                Alder?
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>
                                {email}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography>
                            <Button variant="text" color="blue">Logg ut</Button>
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Button variant="text" color="blue">Slett konto</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Box>
      </StyledDiv>
    </>
  );

};

export default UserProfileComponent;