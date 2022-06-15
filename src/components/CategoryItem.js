import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } =
    props;
  return (
    <div className="col">
      <div className="card d-flex">
        <img
          src={strCategoryThumb}
          className="card-img-top"
          alt={strCategory}
        />
        <div className="card-body">
          <h4 className="card-title">{strCategory}</h4>
          <p className="card-text">{strCategoryDescription.slice(0, 60)}...</p>
        </div>

        <div className="card-footer">
          <Link
            to={`/category/${strCategory}`}
            className="btn btn-outline-dark"
          >
            Watch Category
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
