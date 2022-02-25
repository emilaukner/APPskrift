import React from "react";
import Paper from "@mui/material/Paper";
import { StyledProfilePopup } from "./style";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';

const UserProfileComponent = ({onClose, show}) => {

    const [userID, setUserID] = useState("");
    const [userImage, setImage] = useState("qq");
    const [firstName, setfirstName] = useState("xx");
    const [lastName, setlastName] = useState("yy");
    const [email, setemail] = useState("eeS");
  

    const style =    {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        bgcolor: "background.paper",
        border: "2px solid #000",
        boxShadow: 24,
        p: 4,
      }
  return (
    <>
    <StyledProfilePopup show={show}>
    <Box sx={{ width: "30%", top: "5%", left: "37.5%", position: "fixed" }}>
        <Paper sx={{padding: "7%"}}>
          <Grid
              container spacing={2}
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                  <Grid item xs={12}>
                      <img src=""/>
                  </Grid>
                  <Grid item xs={12}>
                      <Typography>
                          Fornavn Etternavn
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Typography>
                          Email
                      </Typography>
                  </Grid>
                  <Grid item xs={12}>
                      <Button variant="text">Logg ut</Button>
                  </Grid>
                  <Grid item xs={12}>
                      <Button variant="text">Slett konto</Button>
                  </Grid>
              </Grid>
              </Paper>
          </Box>
      </StyledProfilePopup>
    </>
  );
};

export default UserProfileComponent;