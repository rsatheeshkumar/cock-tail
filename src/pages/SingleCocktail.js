import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleRequest } from "../redux/action";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = ({ onSingleDrink, singleDrink }) => {
  const { id } = useParams();

  useEffect(() => {
    onSingleDrink(id);
  }, [id, onSingleDrink]);
  return (
    <div>
      <div className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
        {singleDrink.map((item) => {
          const {
            strDrinkThumb,
            strDrink,
            idDrink,
            strCategory,
            strAlcoholic,
            strGlass,
            strInstructions,
          } = item;
          const ingredients = [
            item.strIngredient1,
            item.strIngredient2,
            item.strIngredient3,
            item.strIngredient4,
            item.strIngredient5,
          ];
          return (
            <div key={idDrink}>
              <h2 className="section-title">{strDrink}</h2>
              <div className="drink">
                <img src={strDrinkThumb} alt={strDrink}></img>
                <div className="drink-info">
                  <p>
                    <span className="drink-data">name :</span> {strDrink}
                  </p>
                  <p>
                    <span className="drink-data">category :</span> {strCategory}
                  </p>
                  <p>
                    <span className="drink-data">info :</span>
                    {strAlcoholic}
                  </p>
                  <p>
                    <span className="drink-data">glass :</span>
                    {strGlass}
                  </p>
                  <p>
                    <span className="drink-data">instructions :</span>
                    {strInstructions}
                    instructions
                  </p>
                  <p>
                    <span className="drink-data">ingredients :</span>
                    {ingredients.map((item, index) => {
                      return item ? <span key={index}> {item}</span> : null;
                    })}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    singleDrink: state.drinks.drinks,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSingleDrink: (useParams) => dispatch(fetchSingleRequest(useParams)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SingleCocktail);
