import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ flexShrink: 0, bgcolor: "#cfe8fc", color: "#000" }}>
      <Typography variant="body2" align="center" sx={{ py: 2 }}>
        Tangme © 2024 | Suphamas Nueaythong
        <IconButton
          aria-label="GitHub"
          href="https://github.com/SuphamasTM"
          target="_blank"
        >
          <GitHub />
        </IconButton>
      </Typography>
    </Box>
  );
};

export default Footer;
