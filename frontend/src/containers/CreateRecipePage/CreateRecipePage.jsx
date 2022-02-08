import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const CreateRecipePage = () => {
  return (
    <>
      <p>CreateRecipePage side</p>
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
                      <Button variant="contained">Fullfør</Button>
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
