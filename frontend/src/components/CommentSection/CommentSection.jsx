import React, { useEffect, useState } from "react";
import { Box, Paper, Grid, Typography } from "@mui/material";
import SingleComment from "./SingleComment/SingleComment";
import { useParams } from "react-router-dom";
import List from "@mui/material/List";
import axios from "axios";
import WriteComment from "./WriteComment/WriteComment";

const CommentSection = () => {
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`/comments/`).then((response) => {
      setComments(response.data);
      console.log(response.data)
    });
  }, []);

  const createCommentModules = () => {
    const userComments = comments
      .filter((comment) => {
        if (comment.recipe === id) return true;
        return false;
      })
      .sort((a, b) => a.dateTimeMade - b.dateTimeMade)
      .map((comment) => {
        return (
          <SingleComment
            key={comment.publishedBy}
            dateTimeMade={comment.dateTimeMade}
            comment={comment.comment}
            publishedBy={comment.publishedBy}
          />
        );
      });
    return userComments;
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Paper>
          <Grid container style={{ padding: "3em" }}>
            <Grid item xs={10}>
              <Typography style={{ fontSize: "2em", fontWeight: "bold" }}>
                Kommentarer
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <WriteComment/>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "2em" }}>
              <List>
                
                {createCommentModules()}
              </List>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
};

export default CommentSection;
