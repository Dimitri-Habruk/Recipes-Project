import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Col, Card, Input } from "antd";
import { Link } from "react-router-dom";
import fridgeImg from '../assets/fridge.jpg'
import { RecipesContext } from '../context/RecipesContext'

const Ingredients = () => {
  const {value1} = useContext (RecipesContext);
  const [keyApi, setKeyApi] = value1
  const [ing, setIng] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");


  const fetchIng = async () => {
    await axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${searchTerm}&apiKey=${keyApi}&number=99`
      )
      .then((res) => {
          setIng(res.data);
          setLoading(true);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchIng();
 }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div style={{width:'90%', display:'flex', margin:'auto', paddingTop:'5%', textAlign:"center", fontSize:'14px'}}>
        <img src={fridgeImg} style={{width:'40%', margin:'auto'}} alt="" />
        <h1 style={{width:'40%', margin:'auto'}}>
          Check what products you have in the fridge and enter them in the search to find a recipe for the selected product.
        </h1>
      </div>
      
      <p style={{textAlign:"center", marginTop:'2%'}}>Any ingredient, for example : potato, tomato, carrot, apple, orange etc...</p>

      <div style={{ marginBottom: "5%" }} className="rowDiet">
        <Input
          style={{ width: "80%", margin: "auto" }}
          placeholder="Search by ingredient name"
          type="text"
          onChange={handleSearch}
        />
        {loading &&
          ing.map((elem) => {
            return (
              <Col>
                <Link to={`/recipe/${elem.id}`}>
                  <Card
                    title={elem.title}
                    style={{
                      width: 220,
                      height: 200,
                      margin: 10,
                      textAlign: "center",
                    }}
                  >
                    <img
                      className="picRecipe"
                      src={elem.image}
                      height={120}
                      alt="food"
                    />
                  </Card>
                </Link>
              </Col>
            );
        })}

      </div>
    </>
  );
};

export default Ingredients;
