import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SearchResults() {
  let [recipes, setRecipes] = useState([]);

  let query = useLocation().search.split("=")[1];
  console.log(query);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/recipes/search?q=${query}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setRecipes(response.data.recipes);
      });
  }, []);

  return (
    <div>
      <div className="uk-section uk-section-default uk-padding-remove-top">
        <div className="uk-container">
          <div data-uk-grid></div>
          <div
            className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top"
            data-uk-grid
          >
            {recipes.map((recipe) => {
              return (
                <>
                  <div>
                    <div className="uk-card">
                      <div className="uk-card-media-top uk-inline uk-light">
                        <img
                          className="uk-border-rounded-medium"
                          src={recipe.image}
                          alt="Course Title"
                        />
                        <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                        <div className="uk-position-xsmall uk-position-top-right">
                          <a
                            href="#"
                            className="uk-icon-button uk-like uk-position-z-index uk-position-relative"
                            data-uk-icon="heart"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">
                          {recipe.name}
                        </h3>
                        <div
                          className="uk-text-xsmall uk-text-muted"
                          data-uk-grid
                        >
                          <div className="uk-width-auto uk-flex uk-flex-middle">
                            <span
                              className="uk-rating-filled"
                              data-uk-icon="icon: star; ratio: 0.7"
                            />
                            <span className="uk-margin-xsmall-left">
                              {recipe.rating}
                            </span>
                            <span>({recipe.reviewCount})</span>
                          </div>
                          <div className="uk-width-expand uk-text-right">
                            {recipe.cuisine}
                          </div>
                        </div>
                      </div>

                      <Link
                        to={`/recipedetails/${recipe.id}`}
                        className="uk-position-cover"
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div className="uk-margin-large-top uk-text-small">
            <ul
              className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove"
              data-uk-margin
            >
              <li>
                <a href="#">
                  <span data-uk-pagination-previous />
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li className="uk-disabled">
                <span>...</span>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a href="#">6</a>
              </li>
              <li className="uk-active">
                <span>7</span>
              </li>
              <li>
                <a href="#">8</a>
              </li>
              <li>
                <a href="#">
                  <span data-uk-pagination-next />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
