import React from "react";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
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
                <Grid xs={1}>
                  <CloseIcon 
					style={{
	    				fill: "red",
                        cursor: "pointer",
                        justifyContent: "right",
                    }}
					onClick={onClose}
				    />
                </Grid>
                
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