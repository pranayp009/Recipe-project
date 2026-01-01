import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Common/Footer";
import Header from "./Common/Header";
import Home from "./Pages/Home";
import RecipeDetails from "./Pages/RecipeDetails";
import Recipes from "./Pages/Recipes";
import Search from "./Pages/Search";
import Recipesbytags from "./Pages/Recipesbytags";
import SearchResults from "./Pages/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipesbytag/:tag" element={<Recipesbytags />} />
          <Route path="/recipedetails/:id" element={<RecipeDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
