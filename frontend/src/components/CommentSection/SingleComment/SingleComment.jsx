import { Avatar, Grid, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import { Link } from "react-router-dom";
import Divider from "@mui/material/Divider";
import axios from "axios";

const SingleComment = (props) => {
  // state of the author (user) og a comment
  const [user, setUser] = useState();

  useEffect(() => {
    axios.get(`/users/${props?.publishedBy}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const date = new Date(props.dateTimeMade);

  return (
    <>
      <ListItem>
        <ListItemAvatar>
          {/* TODO make the avatar link to the user profile that made the comment */}
          <Link to={`/user/recipes/${props.publishedBy}`} style={{ textDecoration: "none" }}>
            <Avatar>
              <Avatar src={user?.image} />
            </Avatar>
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={user?.username}
          secondary={`Publisert ${("00"+date.getDay()).slice(-2)}.${("00"+date.getMonth()).slice(-2)}.${date.getFullYear()}`}
        />
        <Grid item xs={9}>
          <Typography>{props.comment}</Typography>
        </Grid>
      </ListItem>
      <Divider
        component="li"
        style={{ paddingTop: "1em", paddingBottom: "1em" }}
      />
    </>
  );
};

export default SingleComment;
