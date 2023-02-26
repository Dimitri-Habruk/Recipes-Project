import {NavLink, Link} from "react-router-dom";
import logo from '../assets/logo3.png'
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    
      <div className="navBar">
        <Link to="/"><img  className="logo" src={logo} alt="logo" /></Link>
      
        <ul className="links">
          <NavLink className="navlink"  to="/">Home</NavLink>
          <NavLink className="navlink"  to="/recipes">Recipes</NavLink>
          <NavLink className="navlink"  to="/diet">Diet</NavLink>
          <NavLink className="navlink"  to="/ingredients">Ingredients</NavLink>
        </ul>
      </div>
     
  );
};

export default Navbar;
