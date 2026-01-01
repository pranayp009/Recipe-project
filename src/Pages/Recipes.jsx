import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Recipes() {
  let [recipes, setRecipes] = useState([]);
  let [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes").then((response) => {
      setRecipes(response.data["recipes"]);
    });
  }, []);

  useEffect(() => {
    axios.get("https://dummyjson.com/recipes/tags").then((response) => {
      console.log(response.data);
      setTags(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <div className="uk-section uk-section-default">
          <div className="uk-container">
            <div data-uk-grid>
              <div className="uk-width-1-4@m sticky-container">
                <div data-uk-sticky="offset: 100; bottom: true; media: @m;">
                  <h2>Recipes</h2>
                  <ul
                    className="uk-nav-default uk-nav-parent-icon uk-nav-filter uk-margin-medium-top"
                    data-uk-nav
                  >
                    <li className="uk-parent uk-open">
                      <a href="#">Dish Type</a>
                      <ul className="uk-nav-sub">
                        {tags.map((tag) => {
                          return (
                            <>
                              <li>
                                <Link to={`/recipesbytag/${tag}`}>{tag}</Link>
                              </li>
                            </>
                          );
                        })}
                      </ul>
                    </li>
                    <li className="uk-parent">
                      <a href="#">Meal Type</a>
                      <ul className="uk-nav-sub">
                        <li>
                          <a href="#">Breakfast and Brunch</a>
                        </li>
                        <li>
                          <a href="#">Desserts</a>
                        </li>
                        <li>
                          <a href="#">Dinners</a>
                        </li>
                        <li>
                          <a href="#">Lunch</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="uk-width-expand@m">
                <div data-uk-grid></div>
                <div
                  className="uk-child-width-1-2 uk-child-width-1-3@s"
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
                                  <span> ({recipe.reviewCount})</span>
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
                    <li className="uk-active">
                      <span>2</span>
                    </li>
                    <li>
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#">4</a>
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
        </div>
      </div>
    </>
  );
}

export default Recipes;
