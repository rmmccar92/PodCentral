import React from "react";
import Box from "@mui/material/Box";

const NoMatch = () => {
  return (
    <Box flexGrow={1}>
      <h1 align="center">404 Page Not Found</h1>
      <h1 align="center">
        <span role="img" aria-label="Face With Rolling Eyes Emoji">
          🙄
        </span>
      </h1>
    </Box>
  );
};

export default NoMatch;
