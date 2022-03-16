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
    axios.get(`/users/${props.publishedBy}`).then((response) => {
      setUser(response.data);
    });
  }, []);

  return (
    <>
      {/* REMOVE THIS SECTION DOWN TO "========....." */}
      <ListItem>
        <ListItemAvatar>
          <Link to="/linkToUserPage/" style={{ textDecoration: "none" }}>
            <Avatar>
              <Avatar />
            </Avatar>
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary="Kristoffer Grude"
          secondary="Publisert 09.03.2022"
        />
        <Grid item xs={9}>
          <Typography>
            test fwakhwa hw hhw akh kdhwak hkwahfkhw hfkwa hhfwa khh hw khw fkhw
            kfhkhfwa khwa kw h her hfkh hwah hwaf khhf kwahf kwa hhfwa khwf hwh
            khwa hw h khfw hwakh fhwaf khwaf khk hkw hfhwa
          </Typography>
        </Grid>
      </ListItem>
      <Divider
        component="li"
        style={{ paddingTop: "1em", paddingBottom: "1em" }}
      />
      {/* ===========================*/}

      {/* KEEP THIS SECTTION  - this is component with props */}
      <ListItem>
        <ListItemAvatar>
          {/* TODO make the avatar link to the user profile that made the comment */}
          <Link to="/linkToUserPage/" style={{ textDecoration: "none" }}>
            <Avatar>
              <Avatar src={user?.image} />
            </Avatar>
          </Link>
        </ListItemAvatar>
        <ListItemText
          primary={user?.username}
          secondary={`Publisert ${props.dateTimeMade}`}
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
