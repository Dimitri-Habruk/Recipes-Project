import "./App.css";
import 'antd/dist/reset.css';
import Navbar from "./components/Navbar";
import RecipesPage from "./components/RecipesPage";
import { Route, Routes } from "react-router-dom";
import Ingredients from "./components/Ingredients"; 
import Cuisine from "./components/Cuisine"; 
import Diet from "./components/Diet"; 
import Recipe from "./components/Recipe"
import Footer from './components/Footer'
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Recipes-Project" element={<Home />}/>
        <Route path="/recipes" element={<RecipesPage />}/>
        <Route path="/:cuisine" element={<Cuisine/>}/>
        <Route path="/recipe/:id" element={<Recipe/>}/>
        <Route path="/diet" element={<Diet />}/>
        <Route path="/ingredients" element={<Ingredients/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
