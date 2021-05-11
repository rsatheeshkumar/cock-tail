import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchSearchRequest } from "../redux/action";

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    onSearch(searchTerm);
  }, [onSearch, searchTerm]);

  const searchCocktail = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <section className="section search">
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input
              type="text"
              name="name"
              id="name"
              value={searchTerm}
              onChange={searchCocktail}
            />
          </div>
        </form>
      </section>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (searchTerm) => dispatch(fetchSearchRequest(searchTerm)),
  };
};
export default connect(null, mapDispatchToProps)(SearchForm);
