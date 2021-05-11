import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRequest } from "../redux/action";
import Cocktail from "./Cocktail";

const CocktailList = ({ isLoading, isDrinks, onGetDrinks }) => {
  useEffect(() => {
    onGetDrinks();
  }, [onGetDrinks]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...!</h1>
      </div>
    );
  }
  if (!isDrinks) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }
  return (
    <div className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {isDrinks.map((item) => {
          return <Cocktail key={item.idDrink} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDrinks: state.drinks.drinks,
    isLoading: state.drinks.loading,
    isError: state.drinks.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetDrinks: () => dispatch(fetchRequest()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CocktailList);
