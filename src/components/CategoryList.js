import React from "react";
import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list row row-cols-1 row-cols-md-3 g-4 py-4">
      {catalog.map((el) => (
        <CategoryItem key={el.idCategory} {...el} />
      ))}
    </div>
  );
}

export default CategoryList;
