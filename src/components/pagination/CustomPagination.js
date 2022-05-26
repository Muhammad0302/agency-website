import { Pagination } from "@mui/material";
import { createMuiTheme } from "@mui/material/styles";
import { ThemeProvider } from "styled-components";
import "./CustomPagination.css";
const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const CustomPagination = ({ setPage, numOfPages = 10 }) => {
  const handleChange = (page, value) => {
    setPage(value);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          onChange={(e, value) => handleChange(e.target.textContent, value)}
          count={numOfPages}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
