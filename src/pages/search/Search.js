import { TextField } from "@mui/material";
import React, { useState } from "react";

const Search = () => {
  const [type, setType] = useState(0);
  return (
    <div style={{ display: "flex" }}>
      <TextField
        style={{ flex: 1 }}
        className="searchBox"
        label="Search"
        variant="filled"
        // onChange={() => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
