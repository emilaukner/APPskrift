import React, { useState, useEffect } from "react";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MyRecipesPage = () => {
  //========= Hook that stores my recepies ======/
  const [myRecipes, setMyRecipes] = useState([
    {
      recipeId: 40,
      dateMade: "20/10/2022",
      title: "Kjøttboller",
      difficulty: "E",
      score: 2.5,
      estimate: "30 min",
    },
    {
      recipeId: 41,
      dateMade: "20/10/2023",
      title: "Pizza",
      difficulty: "H",
      score: 2.5,
      estimate: "15 min",
    },
    {
      recipeId: 42,
      dateMade: "22/10/2023",
      title: "Suppe",
      difficulty: "M",
      score: 4.5,
      estimate: "35 min",
    },
  ]);

  //=========== API get request for all "My recipes" =========//
  useEffect(() => {
    axios
      .get(`/users/b7b14922-478a-41d1-9f81-ebcc4d53cb79/recipes/`)
      .then((response) => {
        setMyRecipes(response.data);
      });
  }, []);

  //============= Create column types ============//
  const columns = [
    { id: "date", label: "Dato", minWidth: 30 },
    { id: "name", label: "Navn", minWidth: 80 },
    {
      id: "difficulty",
      label: "Vanskelighetsgrad",
      minWidth: 50,
    },
    {
      id: "assessment",
      label: "Vurdering",
      minWidth: 50,
    },
    {
      id: "timeEstimate",
      label: "Tidsestimat",
      minWidth: 30,
    },
    {
      id: "options",
      label: "Options",
      minWidth: 40,
    },
  ];

  //============= Helper function to create a row in table =======//
  const createData = (
    id,
    date,
    name,
    difficulty,
    assessment,
    timeEstimate,
    options
  ) => {
    return { id, date, name, difficulty, assessment, timeEstimate, options };
  };

  //==== Creates rows for each recepie from API request and add to table (as rows) ====//
  let rows = [];
  const addRecepiesToRows = myRecipes.forEach((recipe) => {
    rows.push(
      createData(
        recipe.recipeId,
        recipe.dateMade,
        recipe.title,
        recipe.difficulty === "E"
          ? "Easy"
          : recipe.difficulty === "M"
          ? "Medium"
          : recipe.difficulty === "H"
          ? "Hard"
          : "",
        <Rating
          name="half-rating-read"
          defaultValue={recipe.score}
          precision={0.5}
          readOnly
        />,
        recipe.estimate,
        <>
          <IconButton
            onClick={(event) => handleEditRecipeClick(event, recipe.recipeId)}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={(event) => handleDeleteRecipeClick(event, recipe.recipeId)}
          >
            <DeleteIcon />
          </IconButton>
        </>
      )
    );
  });

  //========== Functions to handle delete and edit of recepies =======//
  const handleEditRecipeClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Edit: " + id);
    //TODO show modal to edit recipe and remove console log
  };

  const handleDeleteRecipeClick = (event, id) => {
    event.preventDefault();
    event.stopPropagation();
    deleteRecipe(id);
		addRecepiesToRows();
    //TODO Show success or fail og API delete request. First ask user to confirm and then delete?
  };

  //==============API delete request to delete singel recipe ============//
  const deleteRecipe = (recipeId) => {
    axios
      .delete(`/recipes/${recipeId}/`)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
    //TODO remove hard coded userid and remove console log
  };

  //============== Pagination of table ==================//
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //============== Rendering of page =======================//
  return (
    <Box sx={{ width: "100%", paddingBottom: "10%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Paper>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{ paddingLeft: "7%", paddingTop: "7%" }}
            >
              Mine Oppskrifter
            </Typography>
            <br />
            <br />
            {addRecepiesToRows}
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            <Typography
                              sx={{ fontWeight: "bold" }}
                              variant="h8"
                            >
                              {column.label}
                            </Typography>
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row) => {
                          return (
                            <TableRow
                              component={Link}
                              to={`/recipe/${row.id}/`}
                              style={{ textDecoration: "none", color: "black" }}
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              key={row.code}
                            >
                              {columns.map((column) => {
                                const value = row[column.id];
                                return (
                                  <TableCell
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MyRecipesPage;
