import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { RecipesContext } from "../context/RecipesContext";
import loadingImage from "../assets/loadingImage.gif";

const Cuisine = () => {
  const { value1 } = useContext(RecipesContext);
  const [keyApi, setKeyApi] = value1;
  const [myCuisine, setMyCuisine] = useState([]);
  const [loading, setLoading] = useState(false);

  let { cuisine } = useParams();

  const fetchRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=${keyApi}`
      )
      .then((res) => {
        setMyCuisine(res.data.results);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  const gastro = cuisine.charAt(0).toUpperCase() + cuisine.slice(1);

  return (
    <div className="recipes">
      <Divider>
        <h1>{gastro} Recipes</h1>
      </Divider>
      {!loading && (
        <div style={{ width: "25%", margin: "auto" }}>
          <img src={loadingImage} alt="loadingImage" />
        </div>
      )}

      {loading && myCuisine &&
        myCuisine.map((elem) => {
          return (
            <>
              <Col>
                <Link to={`/recipe/${elem.id}`}>
                  <Card
                    title={elem.title}
                    style={{
                      width: "200px",
                      height: "200px",
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="picRecipe"
                      src={elem.image}
                      width={150}
                      height={"auto"}
                      alt="food"
                    />
                  </Card>
                </Link>
              </Col>
            </>
          );
        })}
    </div>
  );
};

export default Cuisine;
