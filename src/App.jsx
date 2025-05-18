import "./App.css";
import GenreMovieList from "./components/GenreMovieList";
import Header from "./components/Header";
import ProductionHouse from "./components/ProductionHouse";
import Slider from "./components/Slider";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer/>
    </div>
  );
}

export default App;
