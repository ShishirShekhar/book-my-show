import DefaultHOC from "./HOC/Default.HOC.jsx";
import Home from "./pages/Home.page.jsx";


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Home} />
    </>
  );
}

export default App;
