import React, { useState } from "react";
import { Paper, InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Filter = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
      }}
    >
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <Search />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "Search..." }}
        value={searchTerm}
        onChange={handleChange}
      />
    </Paper>
  );
};

export default Filter;
