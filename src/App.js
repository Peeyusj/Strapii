import Banner from "./components/Banner";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./App.css"
import Banner2 from "./components/Banner2";
function App() {
 

  return (
    <div>
      <Navbar/>
      <Home/>
      {/* data using strapi */}
      <Banner/>
      <Banner2/>
      
    </div>
  );
}

export default App;