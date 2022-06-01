import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import "./Genra.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const colorTheme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
  },
});
const Genra = ({
  type,
  selectedGenres,
  genres,
  setGenres,
  setSelectedGenres,
  setPage,
}) => {
  const fetchGenra = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenra();
    return () => {
      setGenres([]); // unmounting
      //will give you error like map is not a function
      // setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handleDelete = (genre) => {
    setGenres([...genres, genre]);
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setPage(1);
  };

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((genre) => (
        <Chip
          clickable
          size="small"
          key={genre.id}
          label={genre.name}
          style={{ margin: "2px" }}
          color="primary"
          onDelete={() => handleDelete(genre)}
        />
      ))}
      {genres.map((genre) => (
        <ThemeProvider key={genre.id} theme={colorTheme}>
          <Chip
            clickable
            size="small"
            key={genre.id}
            label={genre.name}
            style={{ margin: "2px" }}
            color="primary"
            onClick={() => handleAdd(genre)}
          />
        </ThemeProvider>
      ))}
    </div>
  );
};

export default Genra;
