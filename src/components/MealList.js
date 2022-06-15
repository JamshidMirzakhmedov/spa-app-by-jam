import React from "react";
import MealItem from "./MealItem";

function MealList({ meals }) {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {meals.map((meal) => (
          <MealItem key={meal.idMeal} {...meal} />
        ))}
      </div>
    </>
  );
}

export default MealList;
