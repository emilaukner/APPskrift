import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { StyledCreateUser } from "./CreateUser.style";

//========TODO backdrop when login and create user is showed =========//

const CreateUser = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = () => {
    postCreateUserRequest();
  };

  const postCreateUserRequest = async () => {
    const user = {
      username: username,
      email: email,
      password: password,
      profilPicture: profilePicture,
    };
    await axios
      .post("/users/", user)
      .then(function (response) {
        console.log(response);
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setProfilePicture("");
				props.onComplete();
      })
      .catch(function (error) {
        console.log(error);
        //TODO show an error if post request fails.
      });
  };

  return (
    <StyledCreateUser show={props.show}>
      <Box sx={{ width: "30%", top: "5%", left: "37.5%", position: "fixed" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid>
            <Paper sx={{ padding: "7%" }}>
              <Typography variant="h5" component="div" gutterBottom>
                Opprett ny bruker
              </Typography>
              <br />
              <br />
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={12}>
                  <TextField
                    id="username"
                    label="Brukernavn"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    size="small"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="password"
                    label="Passord"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    size="small"
                    type="password"
                  />
                </Grid>
                <Grid item xs={12}>
                  {password !== confirmPassword && confirmPassword !== "" ? (
                    <TextField
                      error
                      id="confirmPassword"
                      label="Bekreft passord"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      fullWidth
                      size="small"
                      type="password"
                      helperText="Passordene samsvarer ikke"
                    />
                  ) : (
                    <TextField
                      id="confirmPassword"
                      label="Bekreft passord"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      fullWidth
                      size="small"
                      type="password"
                    />
                  )}
                </Grid>

                <Grid item xs={4} sx={{ marginTop: "2%" }}>
                  <Typography variant="subtitle1" gutterBottom component="div">
                    Legg til bilde
                  </Typography>
                </Grid>
                <Grid item xs={8} sx={{ marginTop: "2%" }}>
                  {/* TODO implement image oppload  */}
                  <Button variant="outlined">
                    Last opp bilde
                    <FileUploadIcon />
                  </Button>
                </Grid>
                <br />
                <br />
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={8}></Grid>
                  <Grid item>
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      onClick={handleSubmit}
                      disabled={
                        !username ||
                        !email ||
                        !password ||
                        !confirmPassword ||
                        password !== confirmPassword
                      }
                    >
                      Fullfør
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </StyledCreateUser>
  );
};

export default CreateUser;
