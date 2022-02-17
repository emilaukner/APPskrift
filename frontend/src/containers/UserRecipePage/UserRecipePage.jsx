import React from "react";
import SingelRecipeListModule from "../../components/SingelRecipeListModule/SingelRecipeListModule";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const UserRecipePage = () => {
    
    return (
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
                      Mine Oppskrifter
                  </Typography>
                  <br />
                  <br />
                  <Box sx={{ width: "100%" }}>
                  <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                      <Grid item xs={2}>
                          <Typography
                             variant="subtitle1"
                             gutterBottom
                             component="div"
                             >
                             Recipe Date
                            </Typography>
                      </Grid>
                      <Grid item xs={2}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Recipe Navn
                            </Typography>
                      </Grid>
                      <Grid item xs={2}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Difficulty
                            </Typography>
                      </Grid>
                      <Grid item xs={2}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Evaluation
                            </Typography>
                      </Grid>
                      <Grid item xs={2}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Time Estimate
                            </Typography>
                      </Grid>
                      <Grid item xs={2}>
                            <Typography
                                variant="subtitle1"
                                gutterBottom
                                component="div"
                            >
                                Options
                            </Typography>
                      </Grid>
                  </Grid>
                  <SingelRecipeListModule
                    title="Blueberry pie"
                    date="2/05/2022" 
                    timeEstimate={45}
                    difficulty="E"
                    evaluation={4.2}
                    />
                    <SingelRecipeListModule
                    title="Something"
                    date="17/02/2022" 
                    timeEstimate={15}
                    difficulty="M"
                    evaluation={5}
                    />
                    <SingelRecipeListModule
                    title="Rasberry pie"
                    date="2/15/2022" 
                    timeEstimate={30}
                    difficulty="E"
                    evaluation={3.8}
                    />
                  </Box>
              </Paper>
              </Grid>
          </Grid>
        </Box>
      );
};
export default UserRecipePage;