import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { StyledCreateUser } from "./CreateUser.style";

//========TODO backdrop when login and create user is showed =========//

const CreateUser = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    postCreateUserRequest();
  };

  const postCreateUserRequest = async () => {
    let data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    data.append("image", image);

    await axios
      .post("/users/", data)
      .then(function (response) {
        setUsername("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setImage("");
				props.onComplete();
      })
      .catch(function (error) {
        console.log(error);
        //TODO show an error if post request fails.
      });
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    setImage(event.target.files[0]);
  }

  return (
    <StyledCreateUser show={props.show}>
      <Box sx={{ width: "30%", top: "5%", left: "37.5%", position: "fixed", zIndex: 99}}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid>
            <Paper sx={{ padding: "7%" }}>
							<CloseIcon 
								style={{
									fill: "red",
									cursor: "pointer",
									marginLeft: "100%"
								}}
								onClick={props.onClose}
							/>
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

                <label htmlFor="upload-photo">
                        <input
                          type="file"
                          id="upload-photo"
                          name="upload-photo"
                          hidden
                          onChange={handleImageChange} 
                        />
                        <Button variant="outlined" component="span">
                          Last opp bilde
                          <FileUploadIcon />
                        </Button>
                        {
                          image 
                          ?                          
                          ( <Typography
                            variant="caption"
                            gutterBottom
                            component="div"
                          >
                            {image.name}
                          </Typography> )
                          : null
                        }
                        
                      </label>
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
