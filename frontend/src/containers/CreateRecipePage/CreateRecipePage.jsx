import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import Alert from "@mui/material/Alert";
import axios from "axios";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const CreateRecipePage = () => {
  //=============== General recipe info =====================//
  const [title, setTitle] = useState("");
  const [steps, setSteps] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorShow, setErrorShow] = useState(false);

  //===============Categories selection =======================//
  const [meal, setMeal] = useState("Frokost");
  const [estimate, setEstimate] = useState("15 min");
  const [cousine, setCousine] = useState("Europeisk");
  const [otherCategories, setOtherCategories] = useState(() => []);

  const handleChangeMeal = (event, newMeal) => {
    if (newMeal !== null) {
      setMeal(newMeal);
    }
  };

  const handleChangeEstimate = (event, newEstimate) => {
    if (newEstimate !== null) {
      setEstimate(newEstimate);
    }
  };

  const handleChangeCousine = (event, newCouisine) => {
    if (newCouisine !== null) {
      setCousine(newCouisine);
    }
  };

  const handleChangeOtherCategories = (event, newOtherCategories) => {
    setOtherCategories(newOtherCategories);
  };

  //==================Create recipe axios request ========================//

  const handleSubmit = () => {
    postRecipeRequest();
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTitle("");
    setSteps("");
    setIngredients("");
    setMeal("Frokost");
    setEstimate("15 min");
    setCousine("Europeisk");
    setOtherCategories(() => []);
  };

  const postRecipeRequest = async () => {
    const recipe = {
      title: title,
      difficulty: "E",
      estimate: 10,
      ingredients: ingredients,
      steps: steps,
      category: "",
      publishedBy: "b7b14922-478a-41d1-9f81-ebcc4d53cb79",
    };

    /* TODO SLIK VI MÅ GJØRE OM API TIL Å TA IMOT RECIPE, SLETTE DEN OVER
    const recipe = {
      title: title,
      difficulty: "E",
      ingredients: ingredients,
      steps: steps,
      publishedBy: "b7b14922-478a-41d1-9f81-ebcc4d53cb79",
      meal: meal,
      estimate: estimate,
      cousine: cousine,
      otherCategories: otherCategories,
    };
    */

    await axios
      .post("/recipes/", recipe)
      .then(function (response) {
        console.log(response);
        setShowAlert(true);
        setTimeout(function () {
          setShowAlert(false);
        }, 2000);
      })
      .catch(function (error) {
        console.log(error);
        setErrorShow(true);
        setTimeout(function () {
          setErrorShow(false);
        }, 2000);
      });
  };

  return (
    <>
      {showAlert ? (
        <Alert severity="success">Velykket! Oppskrift ble lagt ut</Alert>
      ) : null}
      {errorShow ? (
        <Alert severity="error">Feilet! Oppskriften ble ikke lagt til</Alert>
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
                        size="small"
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
                    <Grid item xs={12} style={{ marginTop: "10%" }}>
                      <Divider textAlign="center">
                        <Typography>Kategorier</Typography>
                      </Divider>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant="subtitle1" component="div">
                        Måltid
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <ToggleButtonGroup
                        color="primary"
                        size="small"
                        value={meal}
                        exclusive
                        onChange={handleChangeMeal}
                      >
                        <ToggleButton value="Frokost">Frokost</ToggleButton>
                        <ToggleButton value="Lunsj">Lunsj</ToggleButton>
                        <ToggleButton value="Middag">Middag</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant="subtitle1" component="div">
                        Tidsestimat
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <ToggleButtonGroup
                        color="primary"
                        size="small"
                        value={estimate}
                        exclusive
                        onChange={handleChangeEstimate}
                      >
                        <ToggleButton value="15 min">15 min</ToggleButton>
                        <ToggleButton value="30 min">30 min</ToggleButton>
                        <ToggleButton value="45 min">45 min</ToggleButton>
                        <ToggleButton value="1 time">1 time</ToggleButton>
                        <ToggleButton value="Over 1 time">
                          Over 1 time
                        </ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="subtitle1" component="div">
                        Kjøkken
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <ToggleButtonGroup
                        color="primary"
                        size="small"
                        value={cousine}
                        exclusive
                        onChange={handleChangeCousine}
                      >
                        <ToggleButton value="Europeisk">Europeisk</ToggleButton>
                        <ToggleButton value="Asiatisk">Asiatisk</ToggleButton>
                        <ToggleButton value="Fransk">Fransk</ToggleButton>
                        <ToggleButton value="Amerikansk">
                          Amerikansk
                        </ToggleButton>
                        <ToggleButton value="Indisk">Indisk</ToggleButton>
                        <ToggleButton value="Annet">Annet</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>

                    <Grid item xs={4}>
                      <Typography variant="subtitle1" component="div">
                        Øvrige kategorier
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <ToggleButtonGroup
                        color="primary"
                        size="small"
                        value={otherCategories}
                        onChange={handleChangeOtherCategories}
                      >
                        <ToggleButton value="Vegetar">Vegetar</ToggleButton>
                        <ToggleButton value="Glutenfri">Glutenfri</ToggleButton>
                        <ToggleButton value="Laktosefri">
                          Laktosefri
                        </ToggleButton>
                        <ToggleButton value="Sterkt">Sterkt</ToggleButton>
                      </ToggleButtonGroup>
                    </Grid>
                    <Grid item xs={12} />
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
