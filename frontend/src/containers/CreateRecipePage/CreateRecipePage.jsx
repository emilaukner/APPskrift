import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Alert from "@mui/material/Alert";

const CreateRecipePage = () => {
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    //sand data to backend using axios
    postRecepieRequest();
    console.log(title + "-" + steps + "-" + ingredients);
    setShowAlert(true);
    setTimeout(function () {
      setShowAlert(false);
    }, 2000);
    setTitle("");
    setSteps("");
    setIngredients("");
  };

  const postRecepieRequest = async () => {
    const recepie = {
      title: "Tomatsuppe",
      steps: "Hakk løk. Kok suppen",
      ingredients: "1 løk,2 tomater",
    };
    await axios
      .post("/recepie", recepie)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <p>CreateRecipePage side</p>
      {showAlert ? (
        <Alert severity="success">Velykket! Oppskrift ble lagt ut</Alert>
      ) : null}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "100%",
          },
        }}
      >
        <Box sx={{ width: "100%" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={2} />
            <Grid item xs={8}>
              <Paper sx={{ padding: "7%" }}>
                <Typography variant="h4" component="div" gutterBottom>
                  Opprett ny oppskrift
                </Typography>
                <br />
                <br />
                <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Legg til tittel
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="recepie-title-input"
                        label="Tittel"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Legg til fremgangsmåte
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="steps-input"
                        label="Fremgangsmåte"
                        value={steps}
                        onChange={(e) => setSteps(e.target.value)}
                        multiline
                        rows="10"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Legg til ingredienser
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField
                        id="ingredients-input"
                        label="Ingredienser"
                        helperText='Ingredienser seppareres med komma ","'
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        multiline
                        rows="2"
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={4} sx={{ marginTop: "2%" }}>
                      <Typography
                        variant="subtitle1"
                        gutterBottom
                        component="div"
                      >
                        Legg til bilde
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ marginTop: "2%" }}>
                      <Button variant="outlined">
                        Last opp bilde
                        <FileUploadIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={10} />
                    <Grid item xs={2}>
                      <Button
                        variant="contained"
                        onClick={handleSubmit}
                        disabled={!title || !steps || !ingredients}
                      >
                        Fullfør
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={2} />
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default CreateRecipePage;
