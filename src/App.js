import DefaultHOC from "./HOC/Default.HOC";
import Home from "./pages/Home.page";


function App() {
  return (
    <>
    <DefaultHOC path="/" exact component={Home} />
    </>
  );
}

export default App;
