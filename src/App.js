import DefaultHOC from "./HOC/Default.HOC.jsx";
import MovieHOC from "./HOC/Movie.HOC.jsx";
import Home from "./pages/Home.page.jsx";
import Moive from "./pages/Movie.page.jsx"


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Home} />
    <MovieHOC path="/movie/:id" exact component={Moive} />
    </>
  );
}

export default App;
