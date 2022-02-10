import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "darkgrey", padding: "3%" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Typography color="lightgrey">
              {new Date().getFullYear()}{" "}
              <CopyrightIcon color="lightgrey" sx={{ fontSize: 15 }} /> All
              Rights Reserved.
            </Typography>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
