import { useState, useEffect, useContext } from "react";
import { Divider } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import african from "../assets/African.jpeg";
import american from "../assets/american.jpeg";
import british from "../assets/british.jpeg";
import carribean from "../assets/carribean.jpeg";
import chinese from "../assets/chinese.jpeg";
import european from "../assets/european.jpg";
import french from "../assets/French.jpeg";
import greek from "../assets/greek.jpeg";
import indian from "../assets/indien.jpg";
import italian from "../assets/italian.jpeg";
import japanese from "../assets/japanese.jpeg";
import mediterranean from "../assets/meditarian.jpeg";
import mexican from "../assets/tacos.jpg";
import spanish from "../assets/spanishFood.png";
import thai from "../assets/thai.jpeg";
import { RecipesContext } from "../context/RecipesContext";

const RecipesPage = () => {
  const { value1 } = useContext(RecipesContext);
  const [keyApi, setKeyApi] = value1;
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(false);

  const gastronomie = [
    { gast: "African", img: african },
    { gast: "American", img: american },
    { gast: "British", img: british },
    { gast: "Caribbean", img: carribean },
    { gast: "Chinese", img: chinese },
    { gast: "European", img: european },
    { gast: "French", img: french },
    { gast: "Greek", img: greek },
    { gast: "Indian", img: indian },
    { gast: "Italian", img: italian },
    { gast: "Japanese", img: japanese },
    { gast: "Mediterranean", img: mediterranean },
    { gast: "Mexican", img: mexican },
    { gast: "Spanish", img: spanish },
    { gast: "Thai", img: thai },
  ];

  const fetchRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${keyApi}&number=99`
      )
      .then((res) => {
        setData(res.data.results);
        setFilteredData(res.data.results);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <>
      <div>
        <Divider>
          <h1>
            Here you can choose a cuisine from any of the provided countries
          </h1>
        </Divider>

        <ul style={{ listStyleType: "none", textAlign: "center" }}>
          <div className="countries">
            {gastronomie.map((elem) => {
              return (
                <div className="rond">
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/${elem.gast.toLowerCase()}`}
                  >
                    <img
                      style={{
                        height: "100px",
                        width: "100px",
                        borderRadius: "100%",
                        border: "3px solid",
                      }}
                      src={elem.img}
                      alt="logo"
                    />
                    <li>{elem.gast}</li>
                  </Link>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </>
  );
};

export default RecipesPage;
