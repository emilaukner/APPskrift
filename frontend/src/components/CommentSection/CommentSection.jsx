import React, { useEffect, useState } from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import SingleComment from "./SingleComment/SingleComment";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import axios from "axios";

const CommentSection = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/comments/`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const createCommentModules = () => {
    comments
      .filter((comment) => {
        if (comment.recipe === id) return true;
        return false;
      })
      .sort((a, b) => a.dateTimeMade - b.dateTimeMade)
      .map((comment) => {
        return (
          <SingleComment
            dateTimeMade={comment.dateTimeMade}
            comment={comment.comment}
            publishedBy={comment.publishedBy}
          />
        );
      });
    return recipes;
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper>
          <Grid container style={{ padding: "3em" }}>
            <Grid item xs={12}>
              <Typography style={{ fontSize: "2em", fontWeight: "bold" }}>
                Kommentarer
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "2em" }}>
              <List>
                <SingleComment
                  dateTimeMade="09.03.2022"
                  comment="dette er en test"
                />
                {createCommentModules}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default CommentSection;
