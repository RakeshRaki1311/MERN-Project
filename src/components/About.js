import React from "react";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h2" sx={{ fontFamily: "fantasy" }}>
        Welcome to Our CRUD Application
      </Typography>
      <Typography variant="h3" sx={{ fontFamily: "fantasy" }}>
        Built with the MERN Stack
      </Typography>
    </Box>
  );
};

export default About;
