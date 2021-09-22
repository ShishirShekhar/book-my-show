import DefaultHOC from "./HOC/Default.HOC.jsx";
import MovieHOC from "./HOC/Movie.HOC.jsx";
import PlayHOC from "./HOC/Play.HOC.jsx";

import Home from "./pages/Home.page.jsx";
import Moive from "./pages/Movie.page.jsx";
import Play from "./pages/Play.page.jsx";

import axios from "axios";


// axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Home} />
    <MovieHOC path="/movie/:id" exact component={Moive} />
    <PlayHOC path="/play/:id" exact component={Play} />
    </>
  );
}

export default App;
