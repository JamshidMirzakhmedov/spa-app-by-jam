import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import Loader from "./Loader";

function Recipe(props) {
  const [recipe, setRecipe] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      <button className="btn btn-outline-dark" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!recipe.idMeal ? (
        <Loader />
      ) : (
        <div className="recipe">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h1>{recipe.strMeal}</h1>
          <h6>
            <b>Category:</b> {recipe.strCategory}
          </h6>
          {recipe.strArea ? (
            <h6>
              <b>Area: </b> {recipe.strArea}
            </h6>
          ) : null}
          <p>{recipe.strInstructions}</p>
          <button
            className="btn btn-outline-dark my-3 "
            onClick={() => setShowRecipe(!showRecipe)}
          >
            Show Ingredients
          </button>
          {showRecipe && (
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Ingredient</th>
                  <th scope="col">Measure</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(recipe).map((key) => {
                  if (key.includes("Ingredient") && recipe[key]) {
                    return (
                      <tr>
                        <td>{recipe[key]}</td>
                        <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </table>
          )}

          {recipe.strYoutube ? (
            <div className="row ">
              <h5>Video Recipe</h5>
              <iframe
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                title={id}
                allowFullScreen
                frameborder="0"
                style={{ width: "300px" }}
              />
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}

export default Recipe;
