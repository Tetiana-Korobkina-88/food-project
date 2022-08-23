import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMealById } from "../api";
import { Preloader } from "../components/Preloader";

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <h1>{recipe.strMeal}</h1>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <h6>Category: {recipe.strCategory}</h6>
          {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          {recipe.strYoutub ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                title={id}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowfullscreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}

export { Recipe };
