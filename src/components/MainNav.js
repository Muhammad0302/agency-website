import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainNav() {
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
  }, [value, navigate]);

  return (
    <Box sx={{ width: "100%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={{
          position: "fixed",
          bottom: "0",
          backgroundColor: "#2d313a",
          zIndex: "100",
          width: "100%",
          color: "white",
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<MovieIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<LiveTvIcon />}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
