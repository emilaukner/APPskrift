import React from "react";
import { StyledBox } from "./style";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import { Modal } from "@mui/material";

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

const UserProfileComponent = (props) => {

    const [userID, setUserID] = useState("");
    const [userImage, setImage] = useState("qq");
    const [firstName, setfirstName] = useState("xx");
    const [lastName, setlastName] = useState("yy");
    const [email, setemail] = useState("eeS");

    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <>
      <Modal 
          open={open}
          onClose={handleClose}
        >
        
        <Box sx={style}>
          <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                  <Grid item xs={2}>
                      <img src=""/>
                  </Grid>
                  <Grid item xs={2}>
                      <Typography>
                          Fornavn Etternavn
                      </Typography>
                  </Grid>
                  <Grid item xs={2}>
                      <Typography>
                          Email
                      </Typography>
                  </Grid>
                  <Grid item xs={2}>
                      <Button variant="text">Logg ut</Button>
                  </Grid>
                  <Grid item xs={2}>
                      <Button variant="text">Slett konto</Button>
                  </Grid>
              </Grid>
          </Box>
      </Modal>
    </>
  );
};

export default UserProfileComponent;