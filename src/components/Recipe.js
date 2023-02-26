import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "antd";
import axios from "axios";
import loadingImage from "../assets/loadingImage.gif";
import { RecipesContext } from "../context/RecipesContext";

//

const Recipe = () => {
  const { value1 } = useContext(RecipesContext);
  const [keyApi, setKeyApi] = value1;
  const [recipeData, setRecipeData] = useState([]);
  const [loading, setLoading] = useState(false);
  let { id } = useParams();

  const fetchRecipe = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${keyApi}&number=99`
      )
      .then((res) => {
        setRecipeData(res.data);
        setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div>
      {!loading && (
        <div style={{ width: "25%", margin: "auto" }}>
          <img src={loadingImage} alt="loadingImage" />
        </div>
      )}
      {loading && recipeData && (
        <div key={id} className="recipeID">
          <Divider>
            <h1>{recipeData.title}</h1>
          </Divider>
          <div className="ingredAndPhoto">
            <img
              style={{ borderRadius: "30px", width: "45%", height: "100%" }}
              src={recipeData.image}
              alt={recipeData.image}
            />
            <img
              style={{
                width: "40%",
                height: "100%",
              }}
              src={`https://api.spoonacular.com/recipes/${id}/ingredientWidget.png?apiKey=${keyApi}&number=99`}
              alt="ingredients"
            />
          </div>

          <h2>Preparation time: {recipeData.readyInMinutes} minutes</h2>
          {recipeData.instructions ? (
            <p>{recipeData.instructions.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          ) : (
            <p>{recipeData.summary.replace(/<\/?[^>]+(>|$)/g, "")}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;
