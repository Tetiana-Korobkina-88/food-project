import { Link } from "react-router-dom";
function CategoryItem(props) {
  const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } =
    props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt={strCategory} />
        <span className="card-title">Card Title</span>
      </div>
      <div className="card-content">
        <p>{strCategoryDescription}</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${idCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
