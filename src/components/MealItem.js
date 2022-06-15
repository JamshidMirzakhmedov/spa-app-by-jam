import React from "react";
import { Link } from "react-router-dom";

function MealItem(props) {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={strMealThumb} className="card-img-top" alt={strMeal} />
        <div className="card-body">
          <h4 className="card-title">{strMeal}</h4>
        </div>

        <div className="card-footer">
          <Link to={`/meal/${idMeal}`} className="btn btn-outline-dark">
            Watch Recipe
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MealItem;
