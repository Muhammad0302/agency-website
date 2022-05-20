import { Container } from "@mui/system";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import MainNav from "./components/MainNav";
import Movies from "./pages/movies/Movies";
import Search from "./pages/search/Search";
import Series from "./pages/series/Series";
import Trending from "./pages/trending/Trending";
function App() {
  /*
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=3acf37744153bc92a4ed71a57a49ac3f"
      );
      console.log(response);
    }
    fetchData();
  }, []); 
  */
  return (
    <Router>
      <Header />
      <div className="app">
        <Container>
          <Routes>
            <Route exact path="/" element={<Trending />} />

            <Route path="/movies" element={<Movies />} />

            <Route path="/series" element={<Series />} />

            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <MainNav />
    </Router>
  );
}

export default App;
