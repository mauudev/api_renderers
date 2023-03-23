import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonPage from "./pages/PokemonPage";
import StarWarsPage from "./pages/StarWarsPage";
import SimpsonsQuotesPage from "./pages/SimpsonsQuotesPage";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello world!</h1>}/>
        <Route path="/pokemon" element={<PokemonPage />} />
        <Route path="/starwars" element={<StarWarsPage />} />
        <Route path="/simpsons" element={<SimpsonsQuotesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
